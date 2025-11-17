import mineflayer from 'mineflayer';
// import {BotState} from typeStatus.ts;

const options = {
  host: 'localhost',
  port: 25565,
  username: 'Bot',
  auth: 'microsoft',
  respawn: true,
  physicsEnabled: true
}

const bot = mineflayer.createBot(options)


bot.on('spawn', () => {

})

bot.on('chat', (username, message) => {

})
