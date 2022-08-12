import { ApplicationCommandType } from "discord.js";
import { Command } from "../../../Structures/Command";
import {execPurgeCommandModal} from '../../../Functions/ModalFunctions/Modal Create/Moderation/PurgeModalCreate'

export default new Command({
    name: "Delete Messages",
    type: ApplicationCommandType.Message,
    run: async ({interaction, client}) => {
        execPurgeCommandModal(interaction, client);
    }
}) 