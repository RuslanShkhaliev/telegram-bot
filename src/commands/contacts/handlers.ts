import { Context } from 'telegraf';
import { CONTACTS } from './constants';
import { contactsKeyboard } from './keyboards';

export const contactsHandler = (ctx: Context) => {
	ctx.reply('Контакты', {
		reply_to_message_id: ctx.message?.message_id,
		reply_markup: {
			inline_keyboard: contactsKeyboard,
		},
	});
};

export const phoneHandler = (ctx: Context) => {
	ctx.reply(CONTACTS.PHONE);
};
