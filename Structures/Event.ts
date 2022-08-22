import { ClientEvents } from "eris";

export class PulsedEvent<Key extends keyof ClientEvents> {
	constructor(
		public event: Key,
		public run: (...args: ClientEvents[Key]) => any
	) {}
}
