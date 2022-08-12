import { Client, EmbedBuilder, PermissionsBitField } from "discord.js";
import report from 'yurnalist'

export async function execPurgeCommand(client: Client, interaction: any) {
    const Embed = new EmbedBuilder()
    .setAuthor({name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL()})
    .setThumbnail(client.user.displayAvatarURL())

    if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageMessages)) {
        Embed.setDescription(`❌ You don't have the permission (MANAGE_MESSAGES)`)
        .setColor("Red")
    }

    let amount = interaction.options.getInteger("amount");

    if(isNaN(amount)) {
        Embed.setDescription(`❌ **Please specify a valid amount between 1 and 100!**`)
        .setColor("Red")
    }

    if(parseInt(amount) > 99) {
        Embed.setDescription(`❌ **I can only delete 99 message at once!**`)
        .setColor("Red")
    } else {
        try {
            let { size } = await interaction.channel.bulkDelete(amount);
            Embed.setDescription(`👻 Deleted ${size} messages.`)
            .setColor(`Fuchsia`)
        } catch(err){
            Embed.setDescription("❌ I can't delete messages older than 14 days.")
            .setColor("Red")
            report.error(err)
        }
    }

    await interaction.reply({embeds: [Embed]})
}