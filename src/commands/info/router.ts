import { Composer } from 'telegraf';
import { infoMenuHandler } from './handlers';
import { CMD_INFO } from './routeNames';

export const infoRouter = new Composer();
infoRouter.command(CMD_INFO, infoMenuHandler);
