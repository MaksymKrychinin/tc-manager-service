import { Module } from '@nestjs/common';
import { Manager-serviceModule } from './manager-service/manager-service.module';

@Module({
  imports: [Manager-serviceModule],
})
export class AppModule {}
