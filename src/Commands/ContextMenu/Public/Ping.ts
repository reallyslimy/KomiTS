import { ApplicationCommandType, EmbedBuilder } from "discord.js";
import { Command } from "../../../Structures/Command";
import { execPingCommand } from '../../../Functions/Commands/Public/PingFunction'

export default new Command({
    name: "Ping Bot",
    type: ApplicationCommandType.User,
    run: async ({interaction, client}) => {
        execPingCommand(interaction, client);
    }
}) 