    const config = require(`${process.cwd()}/structures/botconfig/config.json`);
const {
  Message,
  MessageEmbed
} = require('discord.js');

module.exports = {
  name: "uptime",
  aliases: ["up"],
  usage: '',
  description: "Freak Uptime",
  category: "info",
  cooldown: 10,
  userPermissions: "",
  botPermissions: "",
  ownerOnly: false,
  toggleOff: false,

  /**
   * @param {Client} client 
   * @param {Message} message
   * @param {String[]} args
   */

  

  async execute(client, message, args, ee) {
    try {

      const days = Math.floor(client.uptime / 86400000)
    const hours = Math.floor(client.uptime / 3600000) % 24
    const minutes = Math.floor(client.uptime / 60000) % 60
    const seconds = Math.floor(client.uptime / 1000) % 60

      message.reply({ embeds:[new MessageEmbed()
        .setColor(ee.color)
        .setDescription(`🔍 Checking uptime`)]}).then(msg => {
        const ping = msg.createdTimestamp - message.createdTimestamp;
        msg.edit({embeds:[new MessageEmbed()
           .setTitle("Freak Uptime")               
          .setColor(ee.color)
          .setDescription(`
\`\`\`${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds\`\`\`
      `)]}
        );
      }).catch(e => message.channel.send(e));
    } catch (e) {
      console.log(e)
    }
  },
};
