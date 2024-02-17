import { Composer } from 'telegraf';
import {
	mainMenuHandler,
	makeAppointmentHandler,
	paymentHandler,
} from './handlers';
import { CMD_MENU, ROUTE_MAKE_APPOINTMENT, ROUTE_PAYMENT } from './routeNames';

export const menuRouter = new Composer();
menuRouter
	.command(CMD_MENU, mainMenuHandler)
	.hears(ROUTE_MAKE_APPOINTMENT, makeAppointmentHandler)
	.hears(ROUTE_PAYMENT, paymentHandler);
