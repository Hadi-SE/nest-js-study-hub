import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { json } from 'express';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe(
      {
        transform: true,
        whitelist: true, // Automatically remove properties that do not have any decorators
        forbidNonWhitelisted: true, // Throw an error if non-whitelisted properties are present
      }
    ));
      app.use(json());

  await app.listen(process.env.PORT ?? 3000);
  
}
bootstrap();
