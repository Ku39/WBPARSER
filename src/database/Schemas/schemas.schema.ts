import { Schema, model, Model } from "mongoose";
import { IUser } from "./schemas.interface";

const userSchema = new Schema({
  TgId: { type: Number, required: true, unique: true }, // Telegram ID
  Sub: { type: Object, required: true }, // Подписка
  UserInfo: { type: Object, required: true }, // Информация о пользователе
  PayData: { type: Schema.Types.Mixed }, // Данные о платеже (Number или Boolean)
  Scene: { type: String, required: true }, // Последняя сцена
  Settings: { type: Object }, // Настройки
});

const User: Model<IUser> = model<IUser>("User", userSchema);

export = User;
