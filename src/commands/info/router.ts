import { infoMenuHandler } from 'src/handlers';
import { CMD_INFO } from 'src/routeNames';
import { Composer } from 'telegraf';

export const infoRouter = new Composer();
infoRouter.command(CMD_INFO, infoMenuHandler);
