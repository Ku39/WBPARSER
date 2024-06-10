export type ISub = {
  tarif: string;
  endDate: number;
  pays: Record<string, string | number>[];
};

// Интерфейс для объекта Settings (пример)
interface ISettings {
  theme: string;
  notifications: boolean;
}

export interface IUser extends Document {
  TgId: number;
  Sub: ISub;
  UserInfo: Record<string, any>;
  PayData: number | boolean;
  Scene: string;
  Settings: ISettings;
}
