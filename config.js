//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923417680053";
global.sudo = process.env.SUDO || "923417680053;
global.owner = process.env.OWNER_NUMBER || "923417680053";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "false";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRVAyUEN6TTVWT2lkaWY5aHNhZUFONmpkYWEzQTZFSDFBMVY2MC85RVJWdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieFkvQzBBbXMyc3hZRlo2b1NHeVNDUEFabTJsci9uOWRoRnlORE1TbCszZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHTjcwVHZrUjhqYTVFWnY1NGo4ckFURXJUZ2xPSGtPd1BySGdCSGFLYUZRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBZDFwZUc2Wm9LMHlPRXNET2wyMkJLVTcvUnFXZkp4dCthQTd5enNzZlNRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllFMFBUZ1pMOGtNcml2bkhwbFk4elBGMlFMaWttMG4yenBEV3prTWdBWG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilhpcnhsc09xd2FXd3J5RE92bjhYek04b2lEdDBZb1Rnd3dGeTRJa0JYMFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU01VEgwL1ZBdlhsbENWcWhVMWhkazhoVWJBcllydVFaZThRUlV3SEwzND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNTVUdUh0SjRNMTZKWXg3TXlraUlkSlRtc2ZGY2czb0RuVS9rdk94RVBnTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndXTmw5cldIbHRJaFRvWTYzVlE3QXVxcm8vWXIyYURBQktrZVV5eUJva0xLSE1GTWFxaE1UTk5WcHV3NDcwWGl6TjcvUmQrR2VJckh3QUp5b3lPZGl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQyLCJhZHZTZWNyZXRLZXkiOiJPUXR6NmxsT2c4dC80OGxsR040QUZrTDAyWFVRSUxkYVhpT0Z4ZGRSQzFJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJHSUhncjM1VlF6bUxqeFZCMC03eXFnIiwicGhvbmVJZCI6IjRhZmU2MzI4LTc4YTgtNDU4OS05NWY1LTM3NDJmYTBlNzhlMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQYmFXN2taTysvcXJOU0t0bTNJZnA3MU9oM2M9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaXhzQ3dUbmxIdVplMnZRWUZQYm1hSnR6UktzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjhOUlM2WE45IiwibWUiOnsiaWQiOiI5MjM0MTc2ODAwNTM6MTBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTVIgREVWRUxPUEVSIFNIQUhaQURBIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQdm10Y2tDRU4rNnE3UUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI4dGhSQVNlU1BaM1d1QWlqdld6bFNMZTd0cDJVUkYwVU9rK2V0QitpTGw4PSIsImFjY291bnRTaWduYXR1cmUiOiJQa25RSHZoeXI5bFdGWUNERzlJdytnRS95d2VIVTVnWkhZeGVPcWhJTHV1VGVvRUFWeTB2a0syM0RSKys2SVdQTWYwRmM0ZnVZQXpiVE4weGJkZlZDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoidWV0OVlBQUxpNFVxazhpQ01rUzdXVlRmVXJrRXBoeU1Zb3drNjMrVWZZYTVta0tVQk1EbnVjbExDc1NnS3NDNzhtdEFURjJjL3JQNHB2S1Y3TUIxaWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjM0MTc2ODAwNTM6MTBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZkxZVVFFbmtqMmQxcmdJbzcxczVVaTN1N2FkbEVSZEZEcFBuclFmb2k1ZiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMDM3NjY4NSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFEdEYifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "MR-DEVELOPER-SHAHZADA😍",
  author: process.env.PACK_AUTHER || "HAMZA ",
  packname: process.env.PACK_NAME || "H♥️A",
  botname: process.env.BOT_NAME || "MR-HAMZA-AMIN",
  ownername: process.env.OWNER_NAME || "HAMZA",
  errorChat: process.env.ERROR_CHAT || "923417680053",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
