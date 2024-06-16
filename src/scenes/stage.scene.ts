import { Scenes } from "telegraf";
import { IBotContext } from "../context/context.interface";
import { StartScene } from "./start.scene";

const arrScene = [new StartScene().handle()];

const stage = new Scenes.Stage<IBotContext>();

export = stage;
