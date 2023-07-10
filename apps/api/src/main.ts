import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('HelpCife backend document')
  .setDescription('The HelpCife API description')
  .setVersion('1.0')
  .addTag('HelpCife')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);


  app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
