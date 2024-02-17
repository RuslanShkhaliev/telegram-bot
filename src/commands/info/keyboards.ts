import { Markup } from 'telegraf';
import {
	ROUTE_COACH_REGALIA,
	ROUTE_COST,
	ROUTE_RESULTS,
	ROUTE_REVIEWS,
	ROUTE_SCHEDULE,
	ROUTE_WHAT_IF_NOT_TRAINED,
	ROUTE_WHAT_TO_TAKE,
} from './routeNames';

export const infoKeyboard = [
	[Markup.button.text(ROUTE_COST), Markup.button.text(ROUTE_COACH_REGALIA)],
	[
		Markup.button.text(ROUTE_WHAT_TO_TAKE),
		Markup.button.text(ROUTE_WHAT_IF_NOT_TRAINED),
	],
	[Markup.button.text(ROUTE_REVIEWS), Markup.button.text(ROUTE_SCHEDULE)],
	[Markup.button.text(ROUTE_RESULTS)],
];
