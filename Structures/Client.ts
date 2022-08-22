import Eris, {
	Client,
	ClientEvents,
} from "eris";
import glob from "glob";
import { promisify } from "util";
import { CommandType } from "../Typings/Command";
import { PulsedEvent } from "./Event";
const globPromise = promisify(glob);

import report from 'yurnalist'

const yurnList = [];
const yurnList2 = [];

export class PulsedClient extends Client {
	botToken: string;
	guildID: string;
	commands: Map<string, CommandType> = new Map();

	constructor(token: string, botOptions: Eris.ClientOptions, guildID) {
		super(token, botOptions);
		this.botToken = token;
		this.guildID = guildID;
	}

	async start() {
		await this.registerModules();
		await this.connect();
	}

	async importFile(filePath: string) {
		return (await import(filePath)).default;
	}

	async refreshCommands(commands: CommandType[]) {
		// If there are commands in the guild that aren't in the commands array - remove them by name
		const guildCommands = await this.guilds.get(this.guildID).getCommands();
		const guildCommandNames = guildCommands.map((command) => command.name);
		const commandNames = commands.map((command) => command.name);

		guildCommandNames.forEach(async (commandName) => {
			if (!commandNames.includes(commandName)) {
				await this.guilds.get(this.guildID).deleteCommand(commandName);
			}
		});

		await this.guilds
			.find((g) => g.id === this.guildID)
			.bulkEditCommands(commands);
	}

	async registerModules() {
		const slashCommands: CommandType[] = [];
		
			const commandFiles = await globPromise(
				`${__dirname}/../Commands/**/*{.ts,.js}`
			);
		report.info(`🤖 Registering commands...`);

		commandFiles.forEach(async (filePath) => {
			const command: CommandType = await this.importFile(filePath);
			if (!command.name) return;
			try {
				yurnList.push(command.name)
				this.commands.set(command.name, command);
				report.success(`🤖 Setted Commands`);
			} catch(e) {
				report.error(`🤖 Something went wrong: ${e}`);
			}
			slashCommands.push(command);
		});

		this.on("ready", () => {
			this.refreshCommands(slashCommands);
		});

		// Event Handler
		const eventFiles = await globPromise(`${__dirname}/../Events/*{.ts,.js}`);
		eventFiles.forEach(async (filePath) => {
			const event: PulsedEvent<keyof ClientEvents> = await this.importFile(filePath);
			this.on(event.event, event.run);
		});
	}
}
