import { Schema, model, Model } from 'mongoose';
import { IUser } from './schemas.interface';

const userSchema = new Schema({
    TgId: { type: Number, required: true, unique: true },
    Sub: { type: Object, required: true },
    ChatId: { type: Number },
    UserInfo: { type: Object, required: true },
    PayData: { type: Number || Boolean, required: true },
    LastScene: { type: String, required: true },
    Settings: { type: Object },
});

const User: Model<IUser> = model<IUser>('User', userSchema);

export = User;
