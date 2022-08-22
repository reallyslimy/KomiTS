import { CommandType } from "../Typings/Command";

export class PulsedCommand {
	constructor(commandOptions: CommandType) {
		Object.assign(this, commandOptions);
	}
}
