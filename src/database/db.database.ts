import mongoose from "mongoose";
import { Database, returnData } from "./database.class";
import User from "./Schemas/schemas.schema";
import { ISub, IUser } from "./Schemas/schemas.interface";
import { User as TgUser } from "telegraf/typings/core/types/typegram";

class Db extends Database {
  constructor() {
    super("TOKEN", "DB");
  }

  async connection() {
    const connect = await mongoose.connect(this.connectionPath);
    if (connect) {
      this.status = true;
      console.log("Подключение к базе данных прошло успешно");
    } else {
      throw new Error("Не удалось подключиться к базе данных");
    }
  }

  async findUser(id: string | number) {
    if (!this.status) await this.connection();
    const result = await User.findOne({ TgId: id });
    if (!result) {
      return {
        success: false,
        body: null,
      };
    } else {
      return {
        success: true,
        body: result,
      };
    }
  }

  async createUser(id: number, Scene: string, userInfo: TgUser, Sub: ISub) {
    if (!this.status) await this.connection();
    const newUser = new User({
      TgId: id,
      Sub: Sub,
      UserInfo: userInfo,
      Scene: Scene,
      Settings: {},
    });
    try {
      await newUser.save();
      return {
        success: true,
        body: null,
      };
    } catch (err: any) {
      console.log(err);

      if ((err.code = 11000)) console.log(`Пользователь: ${id} уже есть в базе`);
      return {
        success: false,
        body: null,
      };
    }
  }

  async updateSub(id: number, update: ISub) {
    if (!this.status) await this.connection();
    const result = await User.updateOne({ TgId: id }, update);
    if (result.modifiedCount > 0) {
      return {
        success: true,
        body: null,
      };
    } else {
      return {
        success: true,
        body: null,
      };
    }
  }
}

export = new Db();
