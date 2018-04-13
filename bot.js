//Requires

const SteamUser = require('steam-user');
const TradeOffersManager = require('steam-tradeoffer-manager');
const config = require('./config.json');
const fs = require('fs');

//Initiating

const client = new SteamUser();
const manager = new TradeOffersManager({
        steam :client,
        community:community,
        language :'en'
});

manager.getUserInventoryContents(config.mySteam,config.appId,config.conId,config.tradeable, (err,inventory) => {
  var inventory = inventory;
  var err = err;
  if(err){
    console.log("An error occured : " + err);
  } else {
    console.log(inventory);
    var invString = JSON.stringify(inventory);
    fs.writeFile(config.mySteam,invString, (err) => {
      if(err){
        console.log(err);
      } else {
        console.log("Wrote to file : " + config.mySteam)
      }
    });
  }
});
