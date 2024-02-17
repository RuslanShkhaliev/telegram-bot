import { Composer } from 'telegraf';
import { CONTACTS } from './constants';
import { contactsHandler } from './handlers';
import { CMD_CONTACTS } from './routeNames';

export const contactsRouter = new Composer();
contactsRouter
	.command(CMD_CONTACTS, contactsHandler)
	.hears(CONTACTS.PHONE, contactsHandler);
