import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOkResponse, ApiProperty } from '@nestjs/swagger';
/**
 * Плодкючаем призму
 */
import { PrismaClient } from '@prisma/client';
import { DbService } from './db/db.service';
const prisma = new PrismaClient();

/**
 * Указываю swagger Как сгенирировать документацию
 * Создаем специальный класс DTO - который опишет какие поля должен вернуть энтпоит
 * Запросы всегда ассинхронны, необходимо явно указать типы через Декоратор ApiOkResponse ->
 * -> И тогда метод getHello - сможет сгенерировать документацию
 */
class HelloWorldDto {
  @ApiProperty()
  message: string;
}

/**
 * Декоратор контроллер для обозначения класса - Контроллером
 */
@Controller()
export class AppController {
  /**
   * Базовая логика неста
   * @param appService
   */
  constructor(
    private readonly appService: AppService,
    private dbService: DbService,
  ) {}

  /**
   * @ApiOkResponse - указываем явно тип для запроса
   * @method getHello() : - указываем тип
   * @returns - оборачиваем в объект
   */
  /**
   * Делаем функцию ассинхроной и типизируем как промис
   */
  @Get()
  @ApiOkResponse({
    type: HelloWorldDto,
  })
  async getHello(): Promise<HelloWorldDto> {
    const users = await this.dbService.user.findMany({});
    console.log(users);
    return { message: this.appService.getHello() };
  }
}
