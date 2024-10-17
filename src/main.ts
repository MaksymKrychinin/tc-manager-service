import { NestFactory } from '@nestjs/core';
import { Manager-serviceModule } from './manager-service/manager-service.module';

async function bootstrap() {
  const app = await NestFactory.create(Manager-serviceModule);
  await app.listen(3000);
}
bootstrap();
