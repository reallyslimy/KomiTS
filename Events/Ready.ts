import { PulsedEvent } from "../index";
import report from 'yurnalist'
export default new PulsedEvent("ready", async () => {
	report.success("🤖 Bot is online and ready!");
});
