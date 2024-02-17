import { Markup } from 'telegraf';
import { CONTACTS } from './constants';

export const contactsKeyboard = [
	[
		Markup.button.url('Telegram', CONTACTS.TELEGRAM),
		Markup.button.url('Instagram', CONTACTS.INSTAGRAM),
	],
	[Markup.button.callback('Телефон', CONTACTS.PHONE)],
];
