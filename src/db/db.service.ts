import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

/**
 * Подключение к БД через PrismaClient
 * Хук onModuleInit запуститься при инициализации модуля, а после произойдет подключение к БД
 * Реализована версия призма клиента, который будет попадать в другие сервисы при помощи ДИАЙ-Контайнера   
 */
@Injectable()
export class DbService extends PrismaClient implements OnModuleInit {
    async onModuleInit(){
        await this.$connect();
    }
}
