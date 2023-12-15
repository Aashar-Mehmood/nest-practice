import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // this will ensure each request body gets validated with DTO
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
