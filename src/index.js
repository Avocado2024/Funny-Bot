import { Bot } from "grammy";
import { TELEGRAM_BOT_TOKEN } from "./config/env.config.js";
import { startHandler } from "./handler/start.handler.js";
import { messageHandler } from "./handler/message.handler.js";

const bot = new Bot(TELEGRAM_BOT_TOKEN);

bot.command("start", startHandler);
bot.on("message", messageHandler);

bot.start();
