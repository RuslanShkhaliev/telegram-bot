import { Markup } from 'telegraf';
import {
	ROUTE_MAKE_APPOINTMENT,
	ROUTE_PAYMENT,
	ROUTE_WISHES,
	ROUTE_WRITE_TO_DM,
} from './routeNames';

export const menuKeyboard = [
	[
		Markup.button.text(ROUTE_MAKE_APPOINTMENT),
		Markup.button.text(ROUTE_WRITE_TO_DM),
	],
	[Markup.button.text(ROUTE_PAYMENT), Markup.button.text(ROUTE_WISHES)],
];
