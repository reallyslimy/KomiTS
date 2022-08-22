import { ApplicationCommandStructure, CommandInteraction } from "eris";
import { PulsedClient } from "../Structures/Client";

interface RunOptions {
	client: PulsedClient;
	interaction: CommandInteraction;
}

type RunFunction = (options: RunOptions) => any;

export type CommandType = ApplicationCommandStructure & {
	run: RunFunction;
};
