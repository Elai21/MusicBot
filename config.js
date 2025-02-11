

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["1090957416880943144"], 
  mongodbUri : "mongodb+srv://souvik6669:<f8vctE3e1LMTrwgz>@cluster0.2s18ox8.mongodb.net/",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/KuAzh5dr4C",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "Koi Node V4",
      password: "youshallnotpass",
      host: "lavalink.jirayu.net",
      port: 13592,
      secure: false
    },
    {
      name: "ChalresNaig Node",
      password: "albinhakanson.se",
      host: "lavalink1.albinhakanson.se",
      port: 1141,
      secure: false
    }
  ]
}
