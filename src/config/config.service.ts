import { DotenvParseOutput, config } from 'dotenv';
import { IConfigService } from './config.interface';

export class ConfigService implements IConfigService {
    private config: DotenvParseOutput;

    constructor() {
        const { error, parsed } = config();
        if (error) {
            throw new Error('не найден файл .env');
        }
        if (!parsed) {
            throw new Error('файл .env пустой');
        }
        this.config = parsed;
    }
    get(key: string): string {
        const res = this.config[key];
        if (!res) {
            throw new Error('Нет такого ключа');
        }
        return res;
    }
}
