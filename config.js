import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

global.owner = [
  ['549116566417', 'CREADOR', true],
  ['.', 'CREADOR', false],
  ['.', 'CREADOR', false],
  ['.', 'CREADOR', false]
  
];

global.suittag = ['.'];
global.prems = ['.'];

global.packname = 'ʙᴏᴛ-ᴍᴅ✰乂';
global.author = 'ᴏғᴄ Bot';
global.vs = '1.10.90';
global.version = vs
global.gt = '✰ʙᴏᴛ-ᴍᴅ✰乂';
global.hadesbot = gt
global.yt = '.';
global.youtube = yt
global.ig = 'https://www.instagram';
global.hadesig = ig
global.md = 'https://github.com//HADES-BOT-OMEGA.git';
global.botxdf = md
global.nn = 'https://chat.whatsapp.com/KlAYxPxLAyZxeXXZkt';
global.nngrupo = nn
global.nnn = 'https://chat.whatsapp.com/DDm7HC6e5MFB22RQ';
global.nnngrupo = nnn
global.paypal = 'https://pay'
global.donar = paypal
global.rg = '*🍀ʀᴇsᴜʟᴛᴀᴅᴏ ᴇɴᴄᴏɴᴛʀᴀᴅᴏ✨*';
global.resultado = rg
global.ag = '*⚠️ᴀᴅᴠᴇʀᴛᴇɴᴄɪᴀ⚠️*';
global.advertencia = ag
global.iig = '*📌ɪɴғᴏʀᴍᴀᴄɪᴏɴ*✨';
global.informacion = iig
global.fg = '*❌ʟᴏ sᴇɴᴛɪᴍᴏs sᴇ ʜᴀ ɢᴇɴᴇʀᴀᴅᴏ ᴜɴ ᴇʀʀᴏʀ ᴠᴜᴇʟᴠᴇ ɪɴᴛᴇɴᴛᴀʀ❌*';
global.fallo = fg
global.mg = '*❗ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ ʟᴏ ʜᴀ ᴜsᴀᴅᴏ ɪɴᴄᴏʀʀᴇᴄᴛᴀᴍᴇɴᴛᴇ*';
global.mal = mg
global.eeg = '*📩ˢᵁ ᴿᴱᴾᴼᴿᵀᴱ ᴴᴬ ˢᴵᴰᴼ ᴱᴺⱽᴵᴬᴰᴼ📩*';
global.envio = eeg
global.eg = '*🍀ʀᴇsᴜʟᴛᴀᴅᴏ ᴇɴᴄᴏɴᴛʀᴀᴅᴏ✨*';
global.exito = eg

global.wm = '✰ʙᴏᴛ-ᴍᴅ✰乂';
global.igfg = '✰ʙᴏᴛ-ᴍᴅ✰乂';
global.wait = '⌛ _Cargando..._\n▰▰▰▱▱▱▱▱▱';

global.imagen1 = fs.readFileSync('./views/Menu.jpg');
global.imagen2 = fs.readFileSync('./views/nuevobot.jpg');
global.imagen3 = fs.readFileSync('./views/Me.jpg');
global.imagen4 = fs.readFileSync('./views/+18.jpg');
global.imagen5 = fs.readFileSync('./views/anime.jpg');
global.imagen6 = fs.readFileSync('./views/bot.jpg');
global.imagen7 = fs.readFileSync('./views/minecraft.jpg');


global.mods = [] 

global.multiplier = 65


const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});
