<div align="center">

![TGBA](https://raw.githubusercontent.com/7ife/7ife.github.io/master/data/tgba-logo.png)
  
::launching a telegram bot on the Android system through Termux::
###### Bot for feedback. If you have a store or any business project in which feedback is needed, you can implement it using this bot.
  
</div>

### General Information:
Launching a telegram bot in Android via Termux. You don't have to pay for the domain and hosting, we'll run it in NodeJS in your Android device. 

<div align="right">

[![Visits Badge](https://badges.pufler.dev/visits/7ife/tgba)](https://github.com/7ife/tgba)
[![](https://img.shields.io/badge/-Donate-%23181717?style=flat-square&logo=bitcoin)](https://commerce.coinbase.com/checkout/61780323-c37c-41a2-8d13-571f125e813a)
</div>

---

###### before starting the installation, register the bot `@BotFather` for get a  <bot_token> [more detailed](https://core.telegram.org/bots#3-how-do-i-create-a-bot) <br> and need get a User ID `@userinfobot` for administration bot

### Instructions:
>**Launching a TG Bot in the Android** <br>
First, install app Termux in [F-Droid](https://f-droid.org/en/packages/com.termux/) `only Android >= 7`, on Google Play does not work correctly. After in Termux, we writing commands: <br>
- `pkg upd`
- `pkg install git`
- `git clone https://github.com/7ife/tgba`
- `cd tgba`
- `bash start.sh` <br>

>if for some reason your device with turned off or rebooted, use this command to start: <br>
- `cd tgba`
- `bash rest.sh`

###### finished development

>**Tested working on Android:** `6.0`-[ok](#continuation-in-development "stably SAMSUNG A5"), `7.0`-[ok](#continuation-in-development "stably MEIZU PRO7"), `11.0`-[ok](#continuation-in-development "stably SAMSUNG S10 Lite") <br>
device: MEIZU PRO7, SAMSUNG S10 Lite <br>
SAMSUNG A5 `Android 6.0` To make the bot work on an old Android, you need to install app Termux in [Google Play](https://play.google.com/store/apps/details?id=com.termux&hl=en_US&gl=US)

[Top](#top "Back to top")
