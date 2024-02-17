import assert from 'assert';
import { Composer, Context } from 'telegraf';
import { contactsRouter } from './commands/contacts';
import { infoRouter } from './commands/info';
import { menuRouter } from './commands/menu';

/**
 * система ролей:
 * 1. adminRouter - пользователь с определенным id
 * 2. publicRouter - права по умолчанию
 * 3. restrictedRouter user - пользователи с ограниченными правами
 * */

export const publicRouter = new Composer();
publicRouter
	.start(async (ctx: Context) => {
		assert(ctx.from, 'ctx.from is undefined');
		await ctx.reply(`
			Добро пожаловать, ${ctx.from.first_name}!\nВоспользуйся командой '/menu' для вызова главного меню
	`);
	})
	.use(menuRouter)
	.use(infoRouter)
	.use(contactsRouter);
