import Eris from "eris";
import { PulsedCommand } from "../../index";

export default new PulsedCommand({
	name: "ping",
	description: "hello",
	type: Eris.Constants.ApplicationCommandTypes.CHAT_INPUT,

	run: async ({ interaction }) => {
		interaction.createMessage("Pong!");
	},
});
