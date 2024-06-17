import { Markup } from "telegraf";
import Db from "../database/db.database";
import { Scene } from "./scene.class";
import StorageService from "../msgStorage/msgStorage.service";
import remoteConfigService from "../remoteConfig/remoteConfig.service";

export class StartScene extends Scene {
  constructor() {
    super("StartScene");
  }

  handle() {
    this.scene.enter(async (ctx) => {
      const userId = ctx.message?.from.id || ctx.callbackQuery?.from.id;
      if (userId) {
        const findUser = await Db.findUser(userId);
        if (findUser?.success) {
        } else {
          const remoteConfig = await remoteConfigService.getConfig();
        }
      }

      // ctx.reply("hello StartScene", Markup.keyboard(["test"]));
    });
    // this.scene.hears("test", async (ctx) => {
    //   const Database = new Db();
    //   // const result = await Database.findUser(ctx.message.chat.id);
    //   // const result = await Database.createUser(ctx.message.chat.id, "startScene", ctx.from, { endDate: 123, pays: [{ date: 123, price: 123, tarif: "string", period: 123 }], tarif: "LOL" } as ISub);
    //   // console.log(result);
    // });
    return this.scene;
  }
}
