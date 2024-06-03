import { Scene } from './scene.class';

export class StartScene extends Scene {
    constructor() {
        super('StartScene');
    }

    handle() {
        this.scene.enter((ctx) => {
            ctx.reply('hello StartScene');
        });
        return this.scene;
    }
}
