import { EmbedBuilder, PermissionsBitField } from 'discord.js'
import report from 'yurnalist';

export async function execPurgeModalSubmit(interaction) {
        let ephemeralMsg = false;
        const Embed = new EmbedBuilder()
        .setColor("Fuchsia")

        const msgAmount = interaction.fields.getTextInputValue('amount-msg');

        if(!interaction.member.permissions.has(PermissionsBitField.Flags.ManageMessages)) {
            Embed.setDescription(`❌ You don't have the permission (MANAGE_MESSAGES)`)
            .setColor("Red")
            ephemeralMsg = true
        }

        if(isNaN(parseInt(msgAmount))){
            Embed.setDescription(`❌ **Please specify a valid amount between 1 and 100!**`)
            .setColor("Red")
            ephemeralMsg = true
        }

        if(parseInt(msgAmount) > 99) {
            Embed.setColor("Red")
            .setDescription(`❌ I can't delete more than 99 messages at once!`)
            ephemeralMsg = true
        } else {
            try {
                let { size } = await interaction.channel.bulkDelete(msgAmount);
                Embed.setColor('Fuchsia')
                .setDescription(`👻 Deleted ${size} messages.`)
            } catch(err) {
                Embed.setDescription("❌ I can't delete messages older than 14 days.")
                .setColor("Red")
                report.error(err);
            }
        }

        await interaction.reply({embeds: [Embed], ephemeral: ephemeralMsg})
}