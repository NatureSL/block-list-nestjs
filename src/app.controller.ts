import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOkResponse, ApiProperty } from '@nestjs/swagger';


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
  constructor(private readonly appService: AppService) {}

  /**
   * @ApiOkResponse - указываем явно тип для запроса
   * @method getHello() : - указываем тип  
   * @returns - оборачиваем в объект 
   */
  @Get()
  @ApiOkResponse({
    type: HelloWorldDto,
  })
  getHello(): HelloWorldDto {
    return { message: this.appService.getHello() };
  }
}
