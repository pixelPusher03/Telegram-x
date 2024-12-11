const Telegraf = require('telegraf');

const botToken = '7683704411:AAFwF89eqSa1xQkXdNVjirI6yr9ABa_6EwI';
const adminId = '431292726';

const bot = new TeleBot(botToken);

// Welcome messages
const welcomeAdmin = "Now share your bot and wait for messages.";
const welcomeUser = "Greetings, send me a message. I will try to answer as soon as possible.";
const replyWrong = "Use the Reply function to reply to the user.";

// Check if the user is an admin
const isAdmin = (userId) => userId === adminId;

// Forward messages to the admin and reply to user
const forwardAndReply = (message) => {
  bot.forwardMessage(adminId, message.chat.id, message.message_id);
  bot.replyTo(message, replyWrong);
};

// Handle start command
bot.on('text', /\/start/, (message) => {
  if (isAdmin(message.from.id)) {
    bot.replyTo(message, welcomeAdmin);
  } else {
    bot.replyTo(message, welcomeUser);
  }
});

// Handle all other messages
bot.on('text', (message) => {
  // Check if the message is a reply to a forwarded message from the admin
  if (message.reply_to && message.reply_to.forward_from) {
    if (message.reply_to.forward_from.id === adminId) {
      bot.forwardMessage(message.reply_to.forward_from.id, message.chat.id, message.message_id);
    } else {
      forwardAndReply(message);
    }
  } else {
    forwardAndReply(message);
  }
});

// Start the bot
bot.start();
