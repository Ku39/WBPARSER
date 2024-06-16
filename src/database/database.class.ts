import { User } from "telegraf/typings/core/types/typegram";
import { IConfigService } from "../config/config.interface";
import { ConfigService } from "../config/config.service";
import { ISub, IUser } from "./Schemas/schemas.interface";

export type returnData = {
  success: boolean | null;
  body: boolean | null | IUser;
};

export abstract class Database {
  status: boolean = false;
  readonly token: string;
  readonly connectionPath: string;

  private readonly config: IConfigService = new ConfigService();

  constructor(tokenName: string, connectionPath: string) {
    this.token = this.config.get(tokenName);
    this.connectionPath = this.config.get(connectionPath);
  }

  abstract connection(): void;

  abstract findUser(id: string | number): Promise<returnData>;

  abstract createUser(id: number, Scene: string, userInfo: User, Sub: ISub): Promise<returnData>;

  abstract updateSub(id: number, update: ISub): Promise<returnData>;
}
