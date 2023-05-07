import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EquipmentController } from './equipment.controller';
import { EquipmentSchema } from './equipment.schema';
import { EquipmentService } from './equipment.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'equipment', schema: EquipmentSchema }]),
  ],
  controllers: [EquipmentController],
  providers: [EquipmentService],
})
export class EquipmentModule {}
