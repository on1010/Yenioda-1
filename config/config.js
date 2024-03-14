// This is a module export statement for exporting an object
module.exports = {
  // This is an object containing various settings
  settings: {
    prefix: '!', // the prefix for commands example, !help
    botName: '', // this is your bot name, it has to be the same in game
    owerName: '', // change this to the owner name
    ownerId: '', // change this with the owner of the bot ID
    botId: '', // change this with your bot ID, you can get the bot id once you start the bot.
    developers: ['65676929f1310172b5a01327', '657cc705d4ac12042fa3225f'], // you can add as many as you want
    moderators: ['65676929f1310172b5a01327', '65c03569e89b7489d90cebd2', '624b0dbcfafd48d077a48859', '656a315f4b23db9ae77bbfa8', '630674b8dbba3a1140ae1f6d', '657cc705d4ac12042fa3225f',
], // add as many as you want
    roomName: 'Changeme', // change this to your room name
    // change this to where you want the bot to teleport on start
    coordinates: {
      x: 17,
      y: 1,
      z: 26,
      facing: 'FrontLeft'
    },
    reactionName: 'wink' // the reaction you want to use to kick players, 'wink', 'wave, 'heart', 'clap', 'thumbsup'
  },
  // This is an object containing authentication data
  authentication: {
    room:"65f16a8f383721551a02265d" , // your room ID can be found in highrise.game/room/
    token: "5e8a91f423531b5b607182a9c5ea8eb7aeb11e29652f11c8d37e91373854d153" // your token ID     you can get one from https://highrise.game
  }
}
