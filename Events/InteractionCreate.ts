import Eris, { CommandInteraction } from "eris";
import { bot } from "../Bot";
import { PulsedCommand } from "../index";
import { PulsedEvent } from "../index";
import { CommandType } from "../typings/Command";

export default new PulsedEvent("interactionCreate", async (interaction) => {
	// Chat Input Commands
	if (interaction instanceof Eris.CommandInteraction) {
		const command: CommandType = bot.commands.get(interaction.data.name);

		if (!command)
			return interaction.createFollowup("This command does not exist!");

		return command.run({
			interaction,
			client: bot,
		});
	}

	if (interaction instanceof Eris.ComponentInteraction) {
		interaction.deferUpdate(); // To stop nonsense update messages
	}
});
