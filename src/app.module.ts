import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import * as process from 'process';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { EquipmentModule } from './modules/equipment/equipment.module';
import { TenderModule } from './modules/tender/tender.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGODB_KEY),
    UserModule,
    EquipmentModule,
    TenderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
