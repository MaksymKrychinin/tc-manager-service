import { Module } from '@nestjs/common';
import { Manager-serviceService } from './services/manager-service.service';
import { Manager-serviceController } from './controllers/manager-service.controller';

@Module({
  controllers: [Manager-serviceController],
  providers: [Manager-serviceService],
})
export class Manager-serviceModule {}
