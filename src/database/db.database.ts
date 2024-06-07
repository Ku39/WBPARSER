import mongoose from 'mongoose';
import { Database } from './database.class';
import User from './database.schema';

export class Db extends Database {
    constructor() {
        super('TOKEN', 'DB');
    }

    async connection() {
        const connect = await mongoose.connect(this.connectionPath);
        if (connect) {
            console.log('Подключение к базе данных прошло успешно');
        } else {
            throw new Error('Не удалось подключиться к базе данных');
        }
    }

    async findUser(id: string): Promise<Record<string, string | boolean>> {
        if (!this.status) await this.connection();

        const user = new User();
        const result = user.findOne(id);

        if (!result) {
            return {
                status: false,
                body: '',
            };
        } else {
            return {
                status: true,
                body: result,
            };
        }
    }

    createUser(
        id: string,
        Scene: string,
        Info: string,
        chatId: string,
        Sub: Record<string, string | number | boolean>
    ): Record<string, string | boolean> {
        return {
            success: true,
            msg: 'result',
        };
    }

    update(
        id: string,
        update: Record<string, string | number | boolean>
    ): Record<string, string | boolean> {
        return {
            success: true,
            msg: 'result',
        };
    }
}
