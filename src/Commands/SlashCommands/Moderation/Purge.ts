import { ApplicationCommandOptionType, ApplicationCommandType, EmbedBuilder } from "discord.js";
import { Command } from "../../../Structures/Command";
import {execPurgeCommand} from '../../../Functions/Commands/Moderation/PurgeFunction'

export default new Command({
    name: "purge",
    description: "Delete Messages from the channel",
    type: ApplicationCommandType.ChatInput,
    options: [
        {
            name: "amount",
            type: ApplicationCommandOptionType.Integer,
            description: "Number of messages to delete"
        }
    ],
    run: async ({interaction, client}) => {
        execPurgeCommand(client, interaction)
    }
}) 