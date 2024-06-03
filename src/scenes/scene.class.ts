import { Scenes } from 'telegraf';
import { IBotContext } from '../context/context.interface';

export abstract class Scene {
    scene: Scenes.BaseScene<IBotContext>;
    constructor(nameScene: string) {
        this.scene = new Scenes.BaseScene<IBotContext>(nameScene);
    }
    abstract handle(): Scenes.BaseScene<IBotContext>;
}
