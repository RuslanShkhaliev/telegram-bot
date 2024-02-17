import { config } from '@/config';
import { publicRouter } from '@/router';
import { menuCommands } from '@common/keyboards';
import { Telegraf } from 'telegraf';

const main = async () => {
	const bot = new Telegraf(config.apiKey);
	bot.use(publicRouter);

	bot.telegram.setMyCommands(menuCommands);

	bot.launch();

	process.once('SIGINT', () => bot.stop('SIGINT'));
	process.once('SIGTERM', () => bot.stop('SIGTERM'));
};

main();
