import { IConfigService } from '../config/config.interface';
import { ConfigService } from '../config/config.service';

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

    abstract findUser(id: string): Promise<Record<string, boolean | string>>;

    abstract createUser(
        id: string,
        Scene: string,
        Info: string,
        chatId: string,
        Sub: Record<string, boolean | number | string>
    ): Record<string, boolean | string>;

    abstract update(
        id: string,
        update: Record<string, boolean | number | string>
    ): Record<string, boolean | string>;
}
