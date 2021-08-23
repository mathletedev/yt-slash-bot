import { Client, Intents } from "discord.js";
import "dotenv-safe/config";

const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});

client.on("ready", () => console.log(`${client.user?.tag} is now online!`));

client.login(process.env.BOT_TOKEN);
