import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  /**
   * Создаю конфигурацию Swagger 
   */
  const config = new DocumentBuilder().setTitle('Block list').build();

  /**
   * Создаем документ для API Swagger
   * @param app - приложение. с апп считываются метаданные 
   * @param config - конфигурация. на основе ее формулируется документ 
   */
    const document = SwaggerModule.createDocument(app,config);

    /**
     * Хостим документ, для чтение, скачивания и т.д. Результат доступен по урлу api. Swagger (api-yaml) default
     * @param 'api' - роут по которому будет хоститься документ  
     * @param app - приложение
     * @param document - документ, которой нужно хостить 
     */
    SwaggerModule.setup('api',app,document);

  await app.listen(3000);
}
bootstrap();
