import { ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ModalActionRowComponentBuilder } from 'discord.js';

export async function execPurgeCommandModal(interaction, client) {
    const modal = new ModalBuilder()
    .setCustomId(`purge-command-modal`)
    .setTitle(`Purge Command`)

    const amountMsg = new TextInputBuilder()
    .setCustomId("amount-msg")
    .setLabel("How many messages do you want to delete?")
    .setStyle(TextInputStyle.Short)

    const firstActionRow = new ActionRowBuilder<ModalActionRowComponentBuilder>().addComponents(amountMsg);
    modal.addComponents(firstActionRow);

    await interaction.showModal(modal);
}