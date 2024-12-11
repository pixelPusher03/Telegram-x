import telebot

BOT_TOKEN = '7683704411:AAFwF89eqSa1xQkXdNVjirI6yr9ABa_6EwI'
ADMIN_ID = '431292726'

bot = telebot.TeleBot(BOT_TOKEN)

// Welcome messages
welcome_admin = "Now share your bot and wait for messages."
welcome_user = "Greetings, send me a message. I will try to answer as soon as possible."
reply_wrong = "Use the Reply function to reply to the user."

// Check if the user is an admin
def is_admin(user_id):
    return user_id == ADMIN_ID

// Forward messages to the admin and reply to user
def forward_and_reply(message):
    bot.forward_message(chat_id=ADMIN_ID, from_chat_id=message.chat.id, message_id=message.message_id)
    bot.reply_to(message, reply_wrong)

// Handle start command
@bot.message_handler(commands=['start'])
def start(message):
    if is_admin(message.from_user.id):
        bot.reply_to(message, welcome_admin)
    else:
        bot.reply_to(message, welcome_user)

// Handle all other messages
@bot.message_handler(func=lambda message: True)
def echo_message(message):
    # Check if the message is a reply to a forwarded message from the admin
    if message.reply_to_message and message.reply_to_message.forward_from:
        if message.reply_to_message.forward_from.id == ADMIN_ID:
            bot.forward_message(chat_id=message.reply_to_message.forward_from.id, from_chat_id=message.chat.id, message_id=message.message_id)
        else:
            forward_and_reply(message)
    else:
        forward_and_reply(message)

// Start the bot
bot.polling()
