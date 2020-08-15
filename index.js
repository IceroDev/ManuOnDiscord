const Discord = require("discord.js")
const bot = new Discord.Client();


bot.on("ready", function() {
   //"a!help |" +  bot.guilds.size + "serv |" + bot.users.size + "users|")
bot.user.setGame("protéger l'Élysée")
})

bot.on('message', async message=>{
  if(message.author.bot) return;
  
  if(message.content.startsWith("<@!617049539500572877>")){
    const reponses = [
      "Certains, au lieu de foutre le bordel, feraient mieux d'aller regarder s'ils ne peuvent pas avoir des postes ...",
      "PARCE QUE C'EST NOTRE PROJEEEETT !!",
      "Bonjour "+message.author.username+" merci de protéger notre belle nation",
      "Je traverse la rue, je vous trouve du travail",
      "Je ne céderai rien ni aux fainéants, ni aux cyniques",
      "Vous n’allez pas me faire peur avec votre t-shirt, la meilleure façon de se payer un costard c’est de travailler.",
      "Il faut des jeunes Français qui aient envie de devenir milliardaires. ",
      "Je n’aime pas ce terme de modèle social.",
      "Le chômage de masse en France c’est parce que les travailleurs sont trop protégés",
      "Je ne vais pas interdire Uber et les VTC, ce serait les renvoyer vendre de la drogue à Stains",
      "Je compte sur vous pour engager plus d’apprentis. C’est désormais gratuit quand ils sont mineurs",
      "Une start-up nation est une nation ou chacun peut se dire qu’il pourra créer une start-up. Je veux que la France en soit une",
      "Je crois que c’est ce qui constitue, d’ailleurs, l’esprit français, c’est une aspiration constante à l’universel, c’est-à-dire cette tension entre ce qui a été et la part d’identité, qui est cette ipséité          stricte, et l’aspiration à un universel, c’est-à-dire à ce qui nous échappe.",
      "La Nation française, le rapport que nous avons avec la Nation est constamment mouvant, s’est construit dans l’Histoire par un permanent dépassement. C’est ça que l’Histoire veut donner.",
      "``Mon ami Sarkozy a un message pour toi`` 😘 http://ageheureux.a.g.pic.centerblog.net/nico_2_meme-www-memegen-fr.jpg"
    ];
    const random = Math.floor(Math.random() * reponses.length);
  message.channel.send(reponses[random]);
    
  };
})
bot.login(process.env.SECRET)
