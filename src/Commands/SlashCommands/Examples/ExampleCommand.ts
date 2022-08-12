/**
 *                   _            
     /\             | |           
    /  \    ______ _| | ___  __ _ 
   / /\ \  |_  / _` | |/ _ \/ _` |
  / ____ \  / / (_| | |  __/ (_| |
 /_/    \_\/___\__,_|_|\___|\__,_|

 Azalea bot 2022, Property of Slimy
                                  
 */

/**
 * This is a whole example command
 * 
 * import { Command } from "../../structures/Command"; //Imports the Class Command
 * import { ApplicationCommandOptionType } from "discord.js" // This is a defined enum from discordjs defining the type of option
 * 
 * exports default new Command({ // Defines a new exported class
 *      name: "example",
 *      description: "New example command",
 *      type: ApplicationCommandType.ChatInput
 *      options: [
 *          {
 *              name: "exampleOption",
 *              description: "exampleOption",
 *              type: ApplicationCommandOptionType.Subcommand // Subcommand Types which are required in the options
 *          }
 *      ],
 *      run: async ({client, interaction}) => {
 *          Here return more new code
 *      }
 * })
 */