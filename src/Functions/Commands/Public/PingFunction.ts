import { EmbedBuilder, Client, ContextMenuCommandInteraction } from "discord.js"
/**
 * @param { ContextMenuCommandInteraction } interaction 
 * @param { Client } client 
 */
export async function execPingCommand(interaction: any, client: Client) {
    const Embed = new EmbedBuilder()
    const target = await interaction.guild.members.fetch(interaction.targetId);
    let ephemeralMsg = false;

    if(target.id == client.user.id) {
        Embed.setDescription(`🏓 Pong! **${interaction.user.username}** your ping is ${client.ws.ping}`)
        .setColor("Fuchsia")
        ephemeralMsg = false;
    } else {
        if(!target.id) {
            Embed.setDescription(`🏓 Pong! **${interaction.user.username}** your ping is ${client.ws.ping}`)
            .setColor("Fuchsia")
            ephemeralMsg = false;
        } else {
            Embed.setDescription(`❌ You can't ping another user that is not the bot`)
            .setColor("Red")
            ephemeralMsg = true;
        }
    }

    await interaction.reply({embeds: [Embed], ephemeral: ephemeralMsg})
}