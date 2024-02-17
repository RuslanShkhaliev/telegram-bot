import { CMD_CONTACTS } from '@/commands/contacts';
import { CMD_INFO } from '@/commands/info';
import { CMD_MENU } from '@/commands/menu';
import { CMD_STOCKS } from '@/commands/stocks';

export const menuCommands = [
	{ command: CMD_MENU, description: 'Главное меню' },
	{ command: CMD_INFO, description: 'Информация' },
	{ command: CMD_CONTACTS, description: 'Контакты' },
	{ command: CMD_STOCKS, description: ' Акции' },
];
