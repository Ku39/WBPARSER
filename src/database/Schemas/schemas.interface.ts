interface ISub {
    tarif: string;
}

// Интерфейс для объекта Settings (пример)
interface ISettings {
    theme: string;
    notifications: boolean;
}

export interface IUser extends Document {
    TgId: number;
    Sub: ISub;
    ChatId?: number;
    UserInfo: Record<string, any>;
    PayData: number | boolean;
    LastScene: string;
    Settings: ISettings;
}
