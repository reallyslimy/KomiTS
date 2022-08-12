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
import { client } from '../Bot';
import { CommandInteractionOptionResolver } from "discord.js";
import { ExtendedInteraction } from "../Typings/Command";
import { execPurgeModalSubmit } from '../Functions/ModalFunctions/Modal Submit/Moderation/PurgeModalSubmit'

export default new Event('interactionCreate', async (interaction) => {
    // Chat Input Commands (Slash Commands)
    if(interaction.isCommand() || interaction.isContextMenuCommand()) {
        const command = client.commands.get(interaction.commandName)
        if(!command) return interaction.followUp({content: "You used a non-existant command"});

        command.run({
            args: interaction.options as CommandInteractionOptionResolver,
            client,
            interaction: interaction as ExtendedInteraction
        })
    }
    
    if(interaction.isModalSubmit()) {
        if(interaction.customId == 'purge-command-modal') {
            execPurgeModalSubmit(interaction)
        }
    }
})