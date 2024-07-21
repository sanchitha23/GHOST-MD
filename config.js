const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "GHOST-MD AUDIO DOWNLOADING...." ;  
global.video= "GHOST-MD VIDEO DOWNLOADING...." ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴳᴴᴼˢᵀ ⱽ1 ᴹᴰ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94741140620";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_34_07_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDQxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDYyLFxuICAgICAgICAxODksXG4gICAgICAgIDIwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTk5LFxuICAgICAgICA2NyxcbiAgICAgICAgMjA2LFxuICAgICAgICA5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjA4LFxuICAgICAgICA2NCxcbiAgICAgICAgMTY3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTksXG4gICAgICAgIDMyLFxuICAgICAgICA2NixcbiAgICAgICAgMTk0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTI5LFxuICAgICAgICA4NixcbiAgICAgICAgMTM1LFxuICAgICAgICA0NSxcbiAgICAgICAgNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDAsXG4gICAgICAgIDQ5LFxuICAgICAgICA0NCxcbiAgICAgICAgMjI3LFxuICAgICAgICA3NixcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTIzLFxuICAgICAgICA3MixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTExLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNCxcbiAgICAgICAgMTgyLFxuICAgICAgICA0OCxcbiAgICAgICAgNixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzMixcbiAgICAgICAgNzQsXG4gICAgICAgIDQyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMjksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjUyLFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMzIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDY1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDExLFxuICAgICAgICAzNixcbiAgICAgICAgMTI1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDQxLFxuICAgICAgICAxOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDQxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTEsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDg5LFxuICAgICAgICA2MCxcbiAgICAgICAgMjM2LFxuICAgICAgICA5OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTc5LFxuICAgICAgICA3MyxcbiAgICAgICAgMSxcbiAgICAgICAgMjIxLFxuICAgICAgICA3LFxuICAgICAgICA2NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDc1LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDY2LFxuICAgICAgICA2NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDk4LFxuICAgICAgICA3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTEwLFxuICAgICAgICA3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDU1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0NixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA0NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDQ3LFxuICAgICAgICA0NyxcbiAgICAgICAgMzksXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTUzLFxuICAgICAgICA1MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTY5LFxuICAgICAgICA2OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODcsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNSxcbiAgICAgICAgMTk1LFxuICAgICAgICA3MixcbiAgICAgICAgMTM3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDk5LFxuICAgICAgICAxODAsXG4gICAgICAgIDg1LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiODM4NkVnaUZsVGZ2SUxmaUhvVXFGUkhHYmpJOHlxVmRsSXNvUEsyV0hpUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiamE1RVQxajJRSVdUWnF4dzlqUEJlQVwiLFxuICBcInBob25lSWRcIjogXCIwNzZmMTJkZC0wMTA2LTQ1MzktOTlmNS1lMzdjYjgzM2VhZGNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzIsXG4gICAgICAxNDYsXG4gICAgICAxMDAsXG4gICAgICAxODksXG4gICAgICAxOTksXG4gICAgICA4OSxcbiAgICAgIDE2OSxcbiAgICAgIDE5OCxcbiAgICAgIDg1LFxuICAgICAgMTgwLFxuICAgICAgNjIsXG4gICAgICAxMzYsXG4gICAgICAxNjEsXG4gICAgICA1NSxcbiAgICAgIDkzLFxuICAgICAgMixcbiAgICAgIDg3LFxuICAgICAgNTcsXG4gICAgICAxODksXG4gICAgICAxNjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQsXG4gICAgICA3MixcbiAgICAgIDExOSxcbiAgICAgIDc2LFxuICAgICAgMjQxLFxuICAgICAgMTU1LFxuICAgICAgMTc2LFxuICAgICAgMTc5LFxuICAgICAgMTE2LFxuICAgICAgMjMyLFxuICAgICAgMjMxLFxuICAgICAgMTQ4LFxuICAgICAgNTYsXG4gICAgICA4MCxcbiAgICAgIDc3LFxuICAgICAgMTcwLFxuICAgICAgMjQ0LFxuICAgICAgMjQyLFxuICAgICAgMjExLFxuICAgICAgMzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRkVGVExYQUdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzAyNzIyNzY2OjI0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2QkvCdkJPwnZCA8J2Qk/CdkJTwnZCSIPCdkIrwnZCI8J2QjfCdkIYg8J2QkvCdkIDwnZCC8J2Qh/CdkIjwnZCNXFxuLlxcblxcblxcblxcblxcblxcbi5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4uXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuLlxcblxcblxcblxcblxcblxcblxcblxcbi5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG4uXFxuKPCdkJXwnZCI8J2QhPCdkJbwnZCE8J2QkfCdkJIg8J2QjvCdkI1cIixcbiAgICBcImxpZFwiOiBcIjcxNTExNjQxNjkwMzI4OjI0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lydG51b0hFSTJRODdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYlJNNDl1cC9FaTVuenNLQURrMUVtRkdOTFBaUjQ0T0RaMmp3b1lxTXQwZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJLaFFxMnhwc1k5VGFMUEJjM2dVNjdyRmZ4aHJZb2NhNkJ0VjJVR28xcktZSFkyalFHdCtPWWUvak81eENKaWxNR1BNTDI3NjJwWUc5THpyTFUrcUFBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJTY2llME5ZNzhlUHowd1E2M3FTOVFIbkF3S0RWM1FzajhBb1BXRnlWT1ZiNlVFbmx3RGF2emlzc2xxRFFialliM0ttNWxkV0hEWkl1VzIvckQvTkdBUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDcwMjcyMjc2NjoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjE1NTA4NjNcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "GHOST",
  botname : process.env.BOT_NAME  || "GHOST-MD",
  ownername:process.env.OWNER_NAME|| "GHOST",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "GHOST"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
