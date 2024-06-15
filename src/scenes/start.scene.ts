import { Markup } from "telegraf";
import Db from "../database/db.database";
import { Scene } from "./scene.class";
import stage from "./stage.scene";
import StorageService from "../msgStorage/msgStorage.service";

export class StartScene extends Scene {
  constructor() {
    super("StartScene");
  }

  handle() {
    this.scene.enter(async (ctx) => {
      let chekUs;
      if (ctx.message?.from.id) {
        chekUs = await Db.findUser(ctx.message?.from.id);
      }
      if (ctx.callbackQuery?.from.id) {
        chekUs = await Db.findUser(ctx.callbackQuery?.from.id);
      }
      // ctx.reply("hello StartScene", Markup.keyboard(["test"]));
    });
    // this.scene.hears("test", async (ctx) => {
    //   const Database = new Db();
    //   // const result = await Database.findUser(ctx.message.chat.id);
    //   // const result = await Database.createUser(ctx.message.chat.id, "startScene", ctx.from, { endDate: 123, pays: [{ date: 123, price: 123, tarif: "string", period: 123 }], tarif: "LOL" } as ISub);
    //   // console.log(result);
    // });
    stage.register(this.scene);
    return this.scene;
  }
}
