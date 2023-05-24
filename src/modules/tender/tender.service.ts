//#region Imports

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TenderModule } from './tender.module';
import { TenderPayload } from './tender.payload';

//#endregion

@Injectable()
export class TenderService {

  //#region Constructor

  constructor(
    @InjectModel('tender')
    private readonly tenderModel: Model<TenderModule>,
  ) {}

  //#endregion

  //#region Methods

  public async create(payload: TenderPayload): Promise<void> {
    return void await this.tenderModel.create(payload);
  }

  public async listMany(): Promise<TenderPayload[]> {
    return await this.tenderModel.find<TenderPayload>().exec();
  }

  public async getById(entityId: string): Promise<TenderPayload> {
    return await this.tenderModel.findById<TenderPayload>(entityId).exec();
  }

  public async updateOne(
    entityId: string,
    payload: TenderPayload,
  ): Promise<TenderPayload> {
    await this.tenderModel.updateOne({ _id: entityId }, payload).exec();
    return await this.getById(entityId);
  }

  public async deleteOne(entityId: string): Promise<void> {
    return void (await this.tenderModel.deleteOne({ _id: entityId }).exec());
  }

  public async setTenderDate(entityId: string, time: string, isFinal: string): Promise<TenderPayload> {
    const isDate2 = isFinal === 'final';
    const dateToUpdate = new Date();
    const [hour, minute] = time.split(':');
    dateToUpdate.setHours(+hour, +minute);
    const dateToUpdateString = dateToUpdate.toISOString();

    return await this.updateOne(entityId, {
      ...!isDate2 ? { date1: dateToUpdateString } : { date2: dateToUpdateString },
    });
  }

  //#endregion

}
