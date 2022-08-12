import { ApplicationCommandType, EmbedBuilder } from "discord.js";
import { Command } from "../../../Structures/Command";
import { execPingCommand } from '../../../Functions/Commands/Public/PingFunction'

export default new Command({
    name: "ping",
    description: "Just a simple ping",
    type: ApplicationCommandType.ChatInput,
    run: async ({interaction, client}) => {
        execPingCommand(interaction, client);
    }
}) 