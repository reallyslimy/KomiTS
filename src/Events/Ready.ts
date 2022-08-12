/**
 *                   _            
     /\             | |           
    /  \    ______ _| | ___  __ _ 
   / /\ \  |_  / _` | |/ _ \/ _` |
  / ____ \  / / (_| | |  __/ (_| |
 /_/    \_\/___\__,_|_|\___|\__,_|

 Azalea bot 2022, Property of Slimy
                                  
 */
import { Event } from "../Structures/Event";
import { connectDatabase } from "../DB/DBConn"
import log from 'yurnalist';
import chalk from 'chalk';
import { ActivityType } from "discord.js";

export default new Event("ready", async (client) => {
    await connectDatabase();
    log.info(chalk.cyan("Please wait until I charge everything up!"))
    const spinner = log.activity();
    spinner.tick(chalk.yellow("I'm on it!"))
    log.success(chalk.magentaBright("Azalea is up and running, ready to use!"))
    spinner.end()

    client.user.setPresence({activities: [{name: '🥵 Azalea v0.1.0 | /help', type: ActivityType.Watching}]})
})