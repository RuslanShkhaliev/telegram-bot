import { menuCommands } from '@/common/keyboards';
import { Telegraf } from 'telegraf';
import { config } from './config';
import { publicRouter } from './router';
// система ролей:
// 1. admin - пользователь с определенным id
// 2. public - права по умолчанию
// 3. restricted user - пользователи с ограниченными правами

const main = async () => {
	const bot = new Telegraf(config.apiKey);
	bot.use(publicRouter);

	bot.telegram.setMyCommands(menuCommands);

	bot.launch();

	process.once('SIGINT', () => bot.stop('SIGINT'));
	process.once('SIGTERM', () => bot.stop('SIGTERM'));
};

main();
