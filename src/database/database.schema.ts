import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    TgId: { type: Number, required: true, unique: true },
    Sub: { type: Object, required: true },
    ChatId: { type: Number },
    UserInfo: { type: Object, required: true },
    PayData: { type: Number || Boolean, required: true },
    LastScene: { type: String, required: true },
    Settings: { type: Object },
});

const User = model('User', userSchema);

export = User;
