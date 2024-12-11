// Importing Modules
const Telegraf = require('telegraf');

// General Settings
const config = {
  token: '7683704411:AAFwF89eqSa1xQkXdNVjirI6yr9ABa_6EwI',
  admin: 34567888,
};

const CHAT_ID = 6431292726;

// Creating a Bot Object
const bot = new Telegraf(config.token);

// Function to Get Hidden Link
function getHiddenLink(url, parseMode = 'markdown') {
  const emptyChar = '';
  switch (parseMode) {
    case 'HTML':
      return `<a href="${url}">${emptyChar}</a>`;
    default:
      throw new Error('Invalid parse mode');
  }
}

// Message to Successfully Installed Bot
bot.telegram.sendMessage(
  CHAT_ID,
  `<b>Great, you have successfully installed a feedback bot!</b> ${getHiddenLink(
    '(link unavailable)',
    'HTML'
  )}`,
  { parseMode: 'HTML' }
);

// Text Settings
const replyText = {
  helloAdmin: 'Now share your bot and wait for messages.',
  helloUser: 'Greetings, send me a message. I will try to answer as soon as possible.',
  replyWrong: 'Use the Reply function to reply to the user.',
};

// Checking User Rights
function isAdmin(userId) {
  return userId === config.admin;
}

// Forwarding to Admin
function forwardToAdmin(ctx) {
  if (isAdmin((link unavailable))) {
    ctx.reply(replyText.replyWrong);
  } else {
    ctx.forwardMessage(config.admin, (link unavailable), (link unavailable));
  }
}

// Bot Start
bot.start((ctx) => {
  ctx.reply(isAdmin((link unavailable)) ? replyText.helloAdmin : replyText.helloUser);
});

// Listening for Messages
bot.on('message', (ctx) => {
  if (ctx.message.reply_to_message && ctx.message.reply_to_message.forward_from && isAdmin((link unavailable))) {
    ctx.telegram.sendCopy((link unavailable), ctx.message);
  } else {
    forwardToAdmin(ctx);
  }
});

// Bot Launch
bot.launch()
  .then(() => console.log('Bot Launched'))
  .catch(console.log);

// Enable Graceful Stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));