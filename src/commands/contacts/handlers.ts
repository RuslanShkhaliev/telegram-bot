import { CONTACTS } from 'src/commands/contacts/constants';
import { contactsKeyboard } from 'src/keyboards/contacts.kb';
import { Context } from 'telegraf';

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
