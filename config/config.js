// This is a module export statement for exporting an object
module.exports = {
  // This is an object containing various settings
  settings: {
    prefix: '!', // the prefix for commands example, !help
    botName: '', // this is your bot name, it has to be the same in game
    owerName: '', // change this to the owner name
    ownerId: '', // change this with the owner of the bot ID
    botId: '', // change this with your bot ID, you can get the bot id once you start the bot.
    developers: ['65676929f1310172b5a01327'], // you can add as many as you want
    moderators: ['65676929f1310172b5a01327',
], // add as many as you want
    roomName: 'Changeme', // change this to your room name
    // change this to where you want the bot to teleport on start
    coordinates: {
      x: 17.5,
      y: 0,
      z: 16,
      facing: 'FrontLeft'
    },
    reactionName: 'wink' // the reaction you want to use to kick players, 'wink', 'wave, 'heart', 'clap', 'thumbsup'
  },
  // This is an object containing authentication data
  authentication: {
    room:"65bf508e1f11e430ac3c9a77" , // your room ID can be found in highrise.game/room/
    token: "262cbbddf510c507111ebde7798d34e6a683d12997629d1b07d7bb3e2aa4e592" // your token ID     you can get one from https://highrise.game
  }
}