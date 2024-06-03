import { Scene } from './scene.class';

export class MainScene extends Scene {
    constructor() {
        super('MainScene');
    }

    handle() {
        this.scene.enter((ctx) => {
            ctx.reply('hello StartScene');
        });

        return this.scene;
    }
}
