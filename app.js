
                      const { Highrise } = require("highrise-js-sdk");
                      const { settings, authentication } = require("./config/config");

                      const bot = new Highrise(authentication.token, authentication.room);
                      const { generatePlayersLength,
                             getUptime,
                             getRandomEmote,
                             getRandomWelcomeMessage
                            } = require("./utils/utils");

                      // Event emitted when the bot has successfully connected to the chat server.
                      bot.on('ready', async (client) => {
                        console.log(`${settings.botName}(${client}) is now online in ${settings.roomName} with ${await generatePlayersLength(bot)} players.`);
                        bot.player.teleport(client, settings.coordinates.x,
                          settings.coordinates.y, settings.coordinates.z,
                          settings.coordinates.facing);
                      });

                      // Event emitted when a chat message is created.
                      bot.on('chatMessageCreate', async (user, message) => {
                        console.log(`(chat): [${user.username}]: ${message}`);
                        const prefix = settings.prefix;
                        if (message.startsWith(`${prefix}kick`)) {
                      // kick an user command
                          if (settings.moderators.includes(user.id)) {
                            const args = message.split(' ');
                            if (!args || args.length < 1) {
                              return bot.message.send(`I did not understand what you said.\nExample: !kick @user`);
                            }
                            const userName = args[1];
                            if (!userName) return bot.message.send(`incorrect username.\nExample: !kick @user`);
                            const target = userName.replace('@', '');
                            const userId =
                              await bot.room.players.getId(target)
                            try {
                              if (!userId || userId.length === 0) {
                                return bot.message.send(` ${target} is not here`);
                              } else {
                                await bot.player.kick(userId[0]);
                                bot.message.send(`@${target} got kicked from the room by${user.username}`)
                              }
                            } catch (error) {
                              console.error(error);
                            }
                          } else {
                            return bot.message.send(`You dont have the permissions to do that.`)
                          }
                        }
                      // "come" command to make the bot follow you
                        if (message.startsWith(`${prefix}come`) && settings.moderators.includes(user.id)) {
                          try {
                            const myPosition = await bot.room.players.cache.position(user.id)
                            console.log(`${myPosition.x} ${myPosition.y} ${myPosition.z} ${myPosition.facing}`)

                            if ('entity_id' in myPosition) {
                              return bot.whisper.send(user.id, `Sorry you can't summon the bot on entity.`);
                            }

                            bot.player.teleport(settings.botId, myPosition.x, myPosition.y, myPosition.z, myPosition.facing);

                          } catch (error) {

                            bot.whisper.send(user.id, `Something went wrong, please contact @Xion.3`)
                            console.error(error)
                          }
                        }
                      //send a custom message by saying someone user name or saying a specific word (can be done multiple time, consult Examples.js)
                        if (message.startsWith(`Bot`)) {
                         bot.message.send(`Merhaba, yapımcım @Atekinz bot yaptırmak istiyorsanız ulaşın.`);
                        };
                      //get the bot uptime by saying '${prefix}uptime'
                        if (message.startsWith(`${prefix}uptime`)) {
                          bot.message.send(await getUptime());
                        };
                      //get the bot ping by saying '${prefix}ping'
                        if (message.startsWith(`${prefix}ping`)) {
                          const latency = await bot.ping.get()
                          bot.message.send(`🤖 My current ping is: ${latency}ms`)
                        }
                        // "personal emote command" works by saying '${prefix}emote name' you can add more emotes, consult emotes.json to get the emotes id
                        const emotes = {
                           "1": "emoji-angry",
                           "2": "emote-bow",
                           "3": "idle-dance-casual",
                           "4": "emoji-celebrate",
    "5": "emote-charging",
    "6": "emote-confused",
    "7": "emoji-cursing",
    "8": "emote-curtsy",
    "9": "emote-cutey",
    "10": "emote-snake",
    "11": "emote-cute",
    "12": "emote-energyball",
    "13": "idle-enthusiastic",
    "14": "emote-fashionista",
    "15": "emoji-flex",
    "16": "emote-float",
    "17": "emote-frog",
    "18": "emoji-gagging",
    "19": "emote-gravity",
    "20": "emote-greedy",
    "21": "emote-hello",
    "22": "emote-hot",
    "23": "dance-icecream",
    "24": "emote-kiss",
    "25": "dance-blackpink",
    "26": "emote-laughing",
    "27": "emote-lust",
    "28": "dance-macarena",
    "29": "emote-maniac",
    "30": "emote-model",
    "31": "emote-no",
    "32": "emote-pose1",
    "33": "emote-pose3",
    "34": "emote-pose5",
    "36": "emote-pose8",
    "37": "emote-punkguitar",
    "38": "dance-russian",
    "39": "emote-sad",
    "40": "idle-dance-tiktok4",
    "41": "dance-shoppingcart",
    "42": "emote-shy",
    "43": "idle-loop-sitfloor",
    "44": "emote-snowangel",
    "45": "emote-snowball",
    "46": "emote-superpose",
    "47": "emote-telekinesis",
    "48": "emote-teleporting",
    "49": "emoji-thumbsup",
    "50": "emote-tired",
    "51": "idle-uwu",
    "52": "emote-wave",
    "53": "dance-weird",
    "54": "dance-wrong",
    "55": "emote-yes",
    "56": "emote-astronaut",
    "57": "dance-pennywise",
    "58": "emote-zombierun",
    "59": "emote-swordfight",
    "60": "idle_singing",
    "61": "dance-tiktok8",
    "62": "dance-tiktok2",
    "63": "dance-tiktok10",
    "64": "dance-tiktok9",
    "65": "dance-pinguin",
    "66": "idle-guitar",
    "67": "emote-stargazer",
    "68": "emote-boxer",
    "69": "dance-creepypuppet",
    "70": "dance-anime",
    "71": "emote-creepycute",
    "72": "emote-headblowup",
    "73": "emote-shy2",
    "74": "emote-celebrate",
    "75": "emote-pose10",
    "76": "emote-iceskating",
    "77": "idle-wild",
    "78": "idle-nervous",
    "79": "emote-timejump",
    "80": "idle-toilet",
    "81": "dance-jinglebell",
    "82": "emote-hyped",
    "83": "emote-sleigh",
    "84": "emote-pose6",
    "85": "emote-jumpb",
    "86": "dance-kawai",
    "87": "dance-touch",
    "88": "sit-relaxed",
    "89": "emote-celebrationstep",

                      }
                        if (message.toLowerCase() in emotes) {

                          bot.player.emote(user.id, emotes[message.toLowerCase()]);
                        };
                      // "random emote for the all the room command" works by saying '${prefix}emote'
                        if (message.startsWith(`${prefix}emote`)) {
                          if (settings.moderators.includes(user.id)) {
                            const players = await bot.room.players.fetch();
                            const randomEmote = await getRandomEmote();
                            players.forEach(async (player) => {
                              const playerId = player[0].id;
                              await bot.player.emote(playerId, randomEmote);
                            });
                          } else {
                          }
                        }
                      });

                      // Event emitted when a whisper message is created.
                      bot.on('whisperMessageCreate', (user, message) => {
                        console.log(`(whisper)[${user.username}]: ${message}`);
                      // "Send a message by whispering the bot command" works by whispering to the bot '${prefix}your message'
                        const prefix = settings.prefix;
                        if (message.startsWith(prefix)) {
                          const text = message.split(prefix)[1].trim();
                          bot.message.send(text);
                        }
                      });

                      // deneme link
                      const express = require('express');
                      const app = express();
                      const port = 8080;

                      // Web sunucu
                      app.get('/', (req, res) => {
                        res.send('staup');
                      });

                      app.listen(port, () => {
                        console.log(`Server is running on port ${port}`);
                      });

                      // Event emitted when an emote is created.
                      bot.on('emoteCreate', (sender, receiver, emote) => {
                        console.log(`[emoteCreate]: ${sender.username} sent ${emote} to ${receiver.username}`);
                      });

                      // Event emitted when a reaction is created.
                      bot.on('reactionCreate', async (sender, receiver, reaction) => {
                        console.log(`[reactionCreate]: ${sender.username} sent ${reaction} to ${receiver.username}`);
                        if (settings.moderators.includes(sender.id) && reaction === settings.reactionName) {
                          if (!settings.moderators.includes(receiver.id)) {
                            bot.whisper.send(receiver.id, `You was kicked fromt the room, @${sender.username} kicked you`);
                            await bot.player.kick(receiver.id);
                          } else {
                            bot.message.send(`The person you tried to ban is a moderator`)
                          }
                        }
                      });

                      // Event emitted when a tip reaction is created.
                      bot.on('tipReactionCreate', (sender, receiver, item) => {
                        console.log(`[tipReactionCreate]: Tip reaction from ${sender.username} to ${receiver.username}: ${item.amount} ${item.type}`);
                        bot.message.send(`@${sender.username} Tipped @${receiver.username} ${item.amount} ${item.type}`);
                      });

                      // Emitted when a player joins the room. add multiple welcome messages by consulting utils.js
                      bot.on('playerJoin', async (user) => {
                        console.log(`[playerJoin]: ${user.username}(${user.id}) Hoşgeldiniz!💙`);

                        if (user.username === 'Atekinz') {
                          bot.message.send("Sahibim odaya katıldı @Atekinz ❤️‍🔥!")
                        }
                        const randomMessage = await getRandomWelcomeMessage()
                        bot.message.send(randomMessage.replace('{{user}}', user.username))
                      });

                      //playerjoin
                      bot.on('playerJoin', (user) => {
                        console.log(`[playerJoin]: ${user.username}(${user.id}) Odaya katıldı`);
                        bot.message.send(`@${user.username} Odamıza hoş geldiniz ! 🕺🏼💃🏼`);
                      });

                      //deneme

                      // Emittd when a player leaves the room.
                      bot.on('playerLeave', (user) => {
                        console.log(`[playerLeave]: ${user.username}(${user.id}) Left the room`);
                        bot.message.send(`Tekrar bekleriz @${user.username}!`)
                      });

                      // Emitted when a player moves or teleports in the game.
                      bot.on('TrackPlayerMovement', (position) => {
                        if ('x' in position && 'y' in position && 'z' in position && 'facing' in position) {
                          console.log(`[TrackPlayerMovement]: ${user.username} moved to ${position.x}, ${position.y}, ${position.z}, ${position.facing}`);
                        } else if ('entity_id' in position && 'anchor_ix' in position) {
                          console.log(`[TrackPlayerMovement]: ${user.username} moved to anchor ${position.entity_id} at index ${position.anchor_ix}`);
                        }
                      });
