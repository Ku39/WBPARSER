import mongoose from "mongoose";
import { Database } from "./database.class";
import User from "./Schemas/schemas.schema";
import { IUser } from "./Schemas/schemas.interface";

export class Db extends Database {
  constructor() {
    super("TOKEN", "DB");
  }

  async connection() {
    const connect = await mongoose.connect(this.connectionPath);
    if (connect) {
      console.log("Подключение к базе данных прошло успешно");
    } else {
      throw new Error("Не удалось подключиться к базе данных");
    }
  }

  async findUser(id: string | number): Promise<Record<string, boolean | null | IUser>> {
    if (!this.status) await this.connection();
    const result = await User.findOne({ TgId: id });
    console.log(result, "result of fundUser");

    if (!result) {
      return {
        status: false,
        body: null,
      };
    } else {
      return {
        status: true,
        body: result,
      };
    }
  }

  createUser(id: string, Scene: string, Info: string, chatId: string, Sub: Record<string, string | number | boolean>): Record<string, string | boolean> {
    return {
      success: true,
      msg: "result",
    };
  }

  update(id: string, update: Record<string, string | number | boolean>): Record<string, string | boolean> {
    return {
      success: true,
      msg: "result",
    };
  }
}
