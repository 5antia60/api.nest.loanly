//#region Imports

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EquipmentModule } from './equipment.module';
import { EquipmentPayload } from './equipment.payload';

//#endregion

@Injectable()
export class EquipmentService {

  //#region Constructor

  constructor(
    @InjectModel('Equipment')
    private readonly equipmentModel: Model<EquipmentModule>,
  ) {}

  //#endregion

  //#region Methods

  public async listMany(): Promise<EquipmentPayload[]> {
    return await this.equipmentModel.find<EquipmentPayload>().exec();
  }

  public async getById(entityId: string): Promise<EquipmentPayload> {
    return await this.equipmentModel.findById<EquipmentPayload>(entityId).exec();
  }

  public async updateOne(
    entityId: string,
    payload: EquipmentPayload,
  ): Promise<EquipmentPayload> {
    await this.equipmentModel.updateOne({ _id: entityId }, payload).exec();
    return await this.getById(entityId);
  }

  public async deleteOne(entityId: string): Promise<void> {
    return void (await this.equipmentModel.deleteOne({ _id: entityId }).exec());
  }

  //#endregion

}
