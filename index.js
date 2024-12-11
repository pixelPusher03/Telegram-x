// Connecting modules
const Telegraf = require('telegraf');
// const HttpsProxyAgent = require('https-proxy-agent');
// General settings
let config = {
    "token": "YOUR_TOKEN", // Bot token
    "admin": 034567888 // bot owner id
};
const CHAT_ID = 034567888 ; // bot owner id
// Creating a bot object
const bot = new Telegraf(config.token, {
        // If you need to go through a proxy, specify it: user, pass, host, port
        // telegram: { agent: new HttpsProxyAgent('http://user:pass@host:port') }
    }
);

function getHiddenLink(url, parse_mode = "markdown") {
  const emptyChar = "‎";

  switch (parse_mode) {
    case "HTML":
      return `<a href="${url}">${emptyChar}</a>`;
    default:
      throw new Error("invalid parse_mode");
  }
}

// message to successfully installed
bot.telegram.sendMessage(
  CHAT_ID,
  `
<b>Great, you have successfully installed a feedback bot!</b>
${getHiddenLink("https://raw.githubusercontent.com/7ife/7ife.github.io/master/data/tgba-logo.png", "HTML")}
`,
  {
    parse_mode: "HTML",
  }
);

// Text Settings
let replyText = {
    "helloAdmin": "Now share your bot and wait for messages.",
    "helloUser":  "Greetings, send me a message. I will try to answer as soon as possible.",
    "replyWrong": "Use the Reply function to reply to the user."
};
// Checking the user's rights
let isAdmin = (userId) => {
    return userId == config.admin;
};
// We redirect the admin from the user or notify the admin about the error
let forwardToAdmin = (ctx) => {
    if (isAdmin(ctx.message.from.id)) {
        ctx.reply(replyText.replyWrong);
    } else {
        ctx.forwardMessage(config.admin, ctx.from.id, ctx.message.id);
    }
};
// Bot Start
bot.start((ctx) => {
    ctx.reply(isAdmin(ctx.message.from.id)
        ? replyText.helloAdmin
        : replyText.helloUser);
});
// Listening for the presence of the message object
bot.on('message', (ctx) => {
    // make sure it was the admin who responded to the user's message
    if (ctx.message.reply_to_message
        && ctx.message.reply_to_message.forward_from
        && isAdmin(ctx.message.from.id)) {
        // we send a copy to the user
        ctx.telegram.sendCopy(ctx.message.reply_to_message.forward_from.id, ctx.message);
    } else {
        // redirecting to the admin
        forwardToAdmin(ctx);
    }
});
// bot launch
bot.launch()
    .then(() => console.log("Bot Launched"))
    .catch(console.log);
// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM')) 
