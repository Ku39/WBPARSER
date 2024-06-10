import { User } from "telegraf/typings/core/types/typegram";
import { IConfigService } from "../config/config.interface";
import { ConfigService } from "../config/config.service";
import { ISub, IUser } from "./Schemas/schemas.interface";

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

  abstract findUser(id: string | number): Promise<Record<string, boolean | null | IUser /*  */>>;

  abstract createUser(id: number, Scene: string, userInfo: User, Sub: ISub): Promise<Record<string, boolean | null | IUser>>;

  abstract updateSub(id: number, update: ISub): Promise<Record<string, boolean | null | IUser>>;
}
