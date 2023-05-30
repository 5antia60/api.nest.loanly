//#region Imports

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DataModuleModule } from './data-module.module';
import { DataModulePayload } from './data-module.payload';
import { TenderPayload } from '../tender/tender.payload';

//#endregion

@Injectable()
export class DataModuleService {

  //#region Constructor

  constructor(
    @InjectModel('data-module')
    private readonly dataModuleModel: Model<DataModuleModule>,
  ) {}

  //#endregion

  //#region Methods

  public async create(payload: DataModulePayload): Promise<void> {
    return void await this.dataModuleModel.create(payload);
  }


  public async listMany(): Promise<DataModulePayload[]> {
    return await this.dataModuleModel.find<DataModulePayload>().exec();
  }

  public async getById(entityId: string): Promise<DataModulePayload> {
    return await this.dataModuleModel.findById<DataModulePayload>(entityId).exec();
  }

  public async updateOne(
    entityId: string,
    payload: DataModulePayload,
  ): Promise<DataModulePayload> {
    await this.dataModuleModel.updateOne({ _id: entityId }, payload).exec();
    return await this.getById(entityId);
  }

  public async deleteOne(entityId: string): Promise<void> {
    return void (await this.dataModuleModel.deleteOne({ _id: entityId }).exec());
  }

  //#endregion

}
