#!bin/bash
#Coded by 7ife
clear
echo ""
echo -e "\033[1;94m ‎"
echo "${k}████████╗ ██████╗ ██████╗  █████╗ ";
echo "${k} ══██╔══╝██╔════╝ ██╔══██╗██╔══██╗";
echo "${k}   ██║   ██║  ███╗██████╔╝███████║";
echo "${k}   ██║   ██║   ██║██╔══██╗██╔══██║";
echo "${k}   ██║   ╚██████╔╝██████╔╝██║  ██║";
echo "${k}   ╚═╝    ╚═════╝ ╚═════╝ ╚═╝  ╚═╝";
echo ""                                 
echo -e "\033[1;90m  Github: github.com/7ife"
echo -e "\033[1;90m  E-mail: 7ife@pm.me"
echo ""
echo -e "\033[1;94m::TGBA for Android::"
sleep 2
echo ""
echo -e ""
echo -e $'\e[1;34m::TGBA::\e[0m\e[1;32m #Installing NodeJS and Telegraf\e[0m'
sleep 2
apt install nodejs -y
apt update -y
npm install -g telegraf
sleep 2
echo -e ""
echo -e " \033[1;93m successful\e[0m"
echo -e "\033[1;96m ‎"
sleep 2
#Enter <bot_token>
search="YOUR_TOKEN"
read -p "#Enter <bot_token> which your received from @BotFather >>> " botToken
if [[ $search != "" && $botToken != "" ]]; then
sed -i "s/$search/$botToken/gi" index.js
fi
echo -e ""
echo -e " \033[1;93m successful\e[0m"
echo -e "\033[1;96m ‎"
#Enter admin id
search="034567888"
read -p "#Enter telegram id - To get it, use @userinfobot >>> " adminId
if [[ $search != "" && $adminId != "" ]]; then
sed -i "s/$search/$adminId/gi" index.js
fi
echo -e ""
echo -e " \033[1;93m successful"
echo ""
echo -e $'\e[1;34m::TGBA::\e[0m\e[1;32m #Installing dependencies\e[0m'
sleep 2
npm i
sleep 1
echo -e " \033[1;93m Start Bot"
echo ""
npm start
echo ""
while true
do
sleep 5
done
