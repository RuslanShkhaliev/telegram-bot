import { Context } from 'telegraf';
import { infoKeyboard } from './keyboards';

export const infoMenuHandler = (ctx: Context) => {
	ctx.reply('Информация', {
		reply_to_message_id: ctx.message?.message_id,
		reply_markup: {
			keyboard: infoKeyboard,
			resize_keyboard: true,
		},
	});
};
