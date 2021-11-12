const Discord = require("discord.js");
const { LOADIPHLPAPI } = require("dns");
const { type } = require("os");
const Client = new Discord.Client;
const prefix = "+";
Client.login(process.env.TOKEN);


// Client Paramètre
Client.on("ready", () => {
    console.log("## U220_BOT by Miinja#3382. ##");
    console.log("------------------------------");
    console.log("API Maintenant En Ligne !");
    console.log("------------------------------");
    setTimeout(() => {
        Client.user.setStatus("online");
        }, 100)

    const statuses = [
        () => Client.user.setActivity("| U220", {
            type:"STREAMING",
            url: "https://www.twitch.tv/u220_odid"
        }),
        () => Client.user.setActivity("➔ https://discord.gg/PSZNK3e6Ke", {
        }),
    ]
    let i = 0
    setInterval(() => {
        statuses[i]()
         i = ++i % statuses.length
    }, 1e4)
        
    
});
// Client Paramètre


// help Commande
Client.on("message", message => {
    if(message.author.bot) return;

        //+help
        if(message.content == prefix + "help"){
            let Embed = new Discord.MessageEmbed()
            .setColor ('#FFFFFF')
            .setTitle('Le QG des U220')
            .setDescription("**> Catégorie Statistiques**\n**🥇 ➔ +leaderboard**   \n *Pour connaitre le Top 10 Messages utilisateurs !*\n\n**📈 ➔ +mystats**   \n *Pour voir ton nombre de messages !*\n\n**📊 ➔ +stats @user**   \n *Pour voir le nombre de messages de tes amis/adversaires !*");
            message.channel.send(Embed)
        }
            
});
// help Commande


// Divers
Client.on("message", message => {
    if(message.author.bot) return;
    member = message.member;

    // All rôles

        $U220 = "907639183617691710";
        $BOOST = "907920654173614101";
        $Div = "906174138723467335";
        $AU220 = "906172780310056981";
        $ADiscord = "907187535858516001";
        $Amis = "907187330434105345";

    // All rôles

if(!member.roles.cache.has($Div)) {  
    if(member.roles.cache.has($U220) || member.roles.cache.has($BOOST) || member.roles.cache.has($AU220) || member.roles.cache.has($ADiscord) || member.roles.cache.has($Amis)) {
    member.roles.add($Div);
    console.log("       Rôle ⬆― U220 ―⬆ ajouté à "  + member.user.tag );
    }
}

if(member.roles.cache.has($Div)) {
    if(!member.roles.cache.has($U220) && !member.roles.cache.has($BOOST) && !member.roles.cache.has($AU220) && !member.roles.cache.has($ADiscord) && !member.roles.cache.has($Amis)) {
    member.roles.remove($Div);
    console.log("       Rôle ⬆― U220 ―⬆ supprimé à "  + member.user.tag );

    }
}
});
// Divers


// Activité
Client.on("message", message => {
    if(message.author.bot) return;
    member = message.member;

    // Grade
    $Members = "907184167714967563";
    $1000MSG = "907185141204521000";
    $5000MSG = "907184883003166771";
    $10000MSG = "907185136687267840";
    $25000MSG = "907185855435792395";
    $50000MSG = "907186840824594432";
    $75000MSG = "907184657806790656";
    $Activity = "907184806612320268";
    
     // Grade

if(!member.roles.cache.has($Activity)) {  
    if(member.roles.cache.has($1000MSG) || member.roles.cache.has($5000MSG) || member.roles.cache.has($10000MSG) || member.roles.cache.has($25000MSG) || member.roles.cache.has($50000MSG) || member.roles.cache.has($75000MSG) || member.roles.cache.has($Members)) {
    member.roles.add($Activity);
    console.log("       Rôle ⬆― Activité ―⬆ㅤ ajouté à "  + member.user.tag );
    }
}

if(member.roles.cache.has($Activity)) {
    if(!member.roles.cache.has($1000MSG) && !member.roles.cache.has($5000MSG) && !member.roles.cache.has($10000MSG) && !member.roles.cache.has($25000MSG) && !member.roles.cache.has($50000MSG) && !member.roles.cache.has($75000MSG) && !member.roles.cache.has($Members)) {
    member.roles.remove($Activity);
    console.log("       Rôle ⬆― Activité ―⬆ㅤ supprimé à "  + member.user.tag );

    }
}
});

// Activité

// Véritable U220
Client.on("message", message => {
    member = message.member;
    const name = member.user.tag
    
    $U220 = "907639183617691710";

    if(message.author.bot) return;
        if(!member.roles.cache.has($U220)) {
            if(name.includes('U220')) {
            member.roles.add($U220)
            console.log("Le grade Véritable U220 a été ajouté à "  + member.user.tag)
            }
        }

        if(message.author.bot) return;
        if(member.roles.cache.has($U220)) {
            if(!name.includes('U220')) {
            member.roles.remove($U220)
            console.log("Le grade Véritable U220 a été supprimé de "  + member.user.tag)
            }
        }
});
// Véritable U220



// Message grade
Client.on('message', message => {
 
     const fs = require('fs');
     const userData = JSON.parse(fs.readFileSync('Storage/userData.json', 'utf-8'));
     var sender = message.author;
     var Msender = message.mentions.users.first();
     const channel2upload = Client.channels.cache.get('814512257455095849');

     
     // Grade
     $1000MSG = "907185141204521000";
     $5000MSG = "907184883003166771";
     $10000MSG = "907185136687267840";
     $25000MSG = "907185855435792395";
     $50000MSG = "907186840824594432";
     $75000MSG = "907184657806790656";
     // Grade

    //  ALL STATS COMMANDS

        //+mystats
        if(message.content == prefix + "mystats") {
            let Embed = new Discord.MessageEmbed()
            .setTitle("Le QG des U220")
            .setColor('#FFFFFF')
            .setDescription('Vous avez envoyé **' + userData[sender.id].messagesSent + '** messages !')
            .setThumbnail("https://lewd.pics/p/hV8N.png")
            .setFooter(text="Bêta")
            .setTimestamp()
            message.channel.send(Embed)
            }
        if (!userData[sender.id]) userData[sender.id] = {
            messageSent: 0
            }
        //+mystats

        //+stats 
        
        if (message.content.startsWith("+stats")) {
            if (message.mentions.users.first()) {
            let Embed = new Discord.MessageEmbed()
            .setTitle("Le QG des U220")
            .setColor('#FFFFFF')
            .setDescription((Msender.tag) +' à envoyé  **' + userData[Msender.id].messagesSent + '** messages !')
            .setThumbnail("https://lewd.pics/p/hV8N.png")
            .setFooter(text="Bêta")
            .setTimestamp()
            message.channel.send(Embed)
            }
            else{
                let Embed = new Discord.MessageEmbed()
            .setTitle("Le QG des U220")
            .setColor('#FFFFFF')
            .setDescription("❌ ➔  Personne n'a été mentioné !")
            .setThumbnail("https://lewd.pics/p/hV8N.png")
            .setFooter(text="Bêta")
            .setTimestamp()
            message.channel.send(Embed)
            }

        }

        //+stats

        // +leaderboard
        if(message.content == prefix + "leaderboard") {
            let Array = []
            message.guild.members.cache.forEach(function(member){
            if(!userData[member.id])return;
            const messages = userData[member.id].messagesSent
            Array.push({name : member.user.username, msg : messages})
        
            });
            Array.sort(function(b,a){
            return a.msg- b.msg
            })
            
            Array = Array.map((x,i)=>`#${i+1} |**  ${x.name}** avec **${x.msg}** Messages. \n`);
             
            
            let Embed = new Discord.MessageEmbed()
            .setTitle("Leaderboard du QG des U220")
            .setColor('#FFFFFF')
            .setDescription(Array.splice(0,10))
            .setThumbnail("https://lewd.pics/p/hV8N.png")
            .setFooter(text="Bêta")
            .setTimestamp()
            message.channel.send(Embed);
        }

        // +leaderboard

    //  ALL STATS COMMANDS

             //Messages Grades
             const user = message.author;

             if(!member.roles.cache.has($1000MSG)) {
                    if(userData[sender.id].messagesSent > 1000) {
                        member.roles.add($1000MSG)
                        channel2upload.send("Bravo " +`${message.author}`+ " ! Tu as maintenant ** 1 000 Messages **." )
                        console.log("Bravo " +message.author.tag+ " ! Tu as maintenant ** 1 000 Messages **.")
                     }
            }

             if(!member.roles.cache.has($5000MSG)) {
                     if(userData[sender.id].messagesSent > 5000) {
                        member.roles.add($5000MSG)
                        channel2upload.send("Bravo " +`${message.author}`+ " ! Tu as maintenant ** 5 000 Messages **." )
                        console.log("Bravo " +message.author.tag+ " ! Tu as maintenant ** 5 000 Messages **.")
                     }
            }  

            if(!member.roles.cache.has($10000MSG)) {      
                     if(userData[sender.id].messagesSent > 10000) {
                        member.roles.add($10000MSG)
                        channel2upload.send("Bravo " +`${message.author}`+ " ! Tu as maintenant ** 10 000 Messages **." )
                        console.log("Bravo " +message.author.tag+ " ! Tu as maintenant ** 10 000 Messages **.")
                     }
            }

            if(!member.roles.cache.has($25000MSG)) {
                     if(userData[sender.id].messagesSent > 25000) {
                        member.roles.add($25000MSG)
                        channel2upload.send("Bravo " +`${message.author}`+ " ! Tu as maintenant ** 25 000 Messages **." )
                        console.log("Bravo " +message.author.tag+ " ! Tu as maintenant ** 25 000 Messages **.")
                     }
            }

            if(!member.roles.cache.has($50000MSG)) {
                     if(userData[sender.id].messagesSent > 50000) {
                        member.roles.add($50000MSG)
                        channel2upload.send("Bravo " +`${message.author}`+ " ! Tu as maintenant ** 50 000 Messages **." )
                        console.log("Bravo " +message.author.tag+ " ! Tu as maintenant ** 50 000 Messages **.")
                     }
            }

            if(!member.roles.cache.has($75000MSG)) {
                     if(userData[sender.id].messagesSent > 75000) {
                        member.roles.add($75000MSG)
                        channel2upload.send("Bravo " +`${message.author}`+ " ! Tu as maintenant ** 10 000 Messages **." )
                        console.log("Bravo " +message.author.tag+ " ! Tu as maintenant ** 75 000 Messages **.")
                     }
            }
        
             //Messages Grades

    if(message.author.bot) return;
     if (message.channel.id !== "907178881948213248" && message.channel.id !== "907565604188348466") {
         userData[sender.id].messagesSent++;
         fs.writeFile('Storage/userData.json', JSON.stringify(userData), (err) => {if (err) console.error(err);})
     } 
    });
// Message grade
