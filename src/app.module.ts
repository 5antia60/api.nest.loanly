import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.module';
import { EquipmentModule } from './modules/equipment/equipment.module';
import { TenderModule } from './modules/tender/tender.module';
import { DataModuleModule } from './modules/data-module/data-module.module';
import * as process from 'process';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGODB_KEY),
    UserModule,
    EquipmentModule,
    TenderModule,
    DataModuleModule,
  ],
})
export class AppModule {}
