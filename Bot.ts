// Test
import Eris, { Client, type ApplicationCommand } from "eris";
import 'dotenv/config'
import { PulsedClient } from "./index";

export const otype = Eris.Constants.ApplicationCommandOptionTypes;

export const bot = new PulsedClient(
	process.env.botToken,
	{
		intents: ["all"],
	},
	process.env.guildID
);

bot.start();
