import * as assert from 'assert';
import dotenv from 'dotenv';
import * as process from 'process';

dotenv.config();

assert.ok(process.env.BOT_TOKEN, 'API_BOT_KEY is not defined');
assert.ok(process.env.BOT_URL, 'BOT_URL is not defined');
export const config = {
	apiKey: process.env.BOT_TOKEN,
	botUrl: process.env.BOT_URL,
};
