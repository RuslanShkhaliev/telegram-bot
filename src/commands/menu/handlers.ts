import path from 'path';
import { Context, Input } from 'telegraf';
import { menuKeyboard } from './keyboards';

export const mainMenuHandler = (ctx: Context) => {
	ctx.reply('Главное меню', {
		reply_to_message_id: ctx.message?.message_id,
		reply_markup: {
			keyboard: menuKeyboard,
			resize_keyboard: true,
		},
	});
};
export const paymentHandler = async (ctx: Context) => {
	const paymentQrcodePath = path.resolve(__dirname, '../static/photo/m10.jpg');
	await ctx.replyWithPhoto(Input.fromLocalFile(paymentQrcodePath), {
		caption: `
	Привет! Мне можно перевести деньги на кошелёк m10 по ссылке или QR-коду :) 
 https://link.api.m10.az/wt7opjRzPCQw7Br19`,
	});
};

export const makeAppointmentHandler = (ctx: Context) => {
	ctx.telegram.sendMessage(ctx.chat?.id as number, 'Записаться');
};

export const backToMainMenuHandler = (ctx: Context) => {
	ctx.reply('Главное меню', {
		reply_markup: {
			keyboard: menuKeyboard,
			resize_keyboard: true,
		},
	});
};
