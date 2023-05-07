import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TenderController } from './tender.controller';
import { TenderSchema } from './tender.schema';
import { TenderService } from './tender.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'tender', schema: TenderSchema }]),
  ],
  controllers: [TenderController],
  providers: [TenderService],
})
export class TenderModule {}
