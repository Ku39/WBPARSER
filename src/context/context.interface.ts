import { Scenes } from 'telegraf';

export interface SessionData extends Scenes.SceneSessionData {
    courseLike?: boolean;
    scene?: string;
}

export interface IBotContext extends Scenes.SceneContext<SessionData> {}
