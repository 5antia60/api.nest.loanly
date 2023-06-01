import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DataModuleController } from './data-module.controller';
import { DataModuleSchema } from './data-module.schema';
import { DataModuleService } from './data-module.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'data-module', schema: DataModuleSchema }]),
  ],
  controllers: [DataModuleController],
  providers: [DataModuleService],
  exports: [DataModuleService],
})
export class DataModuleModule {}
