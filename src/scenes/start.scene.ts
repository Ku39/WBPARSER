import { Markup } from 'telegraf';
import { Db } from '../database/db.database';
import { Scene } from './scene.class';

export class StartScene extends Scene {
    constructor() {
        super('StartScene');
    }

    handle() {
        this.scene.enter((ctx) => {
            ctx.reply('hello StartScene', Markup.keyboard(['test']));
        });
        this.scene.hears('test', async (ctx) => {
            const Database = new Db();
            const result = await Database.findUser(ctx.message.chat.id);
            // console.log(result);
        });
        return this.scene;
    }
}
