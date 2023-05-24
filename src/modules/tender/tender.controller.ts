//#region Imports

import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TenderPayload } from './tender.payload';
import { TenderService } from './tender.service';

//#endregion

@Controller('tenders')
export class TenderController {

  //#region Constructor

  constructor(
    private tenderService: TenderService,
  ) { }

  //#endregion

  //#region Methods

  @Get()
  public async getAll(): Promise<TenderPayload[]> {
    return await this.tenderService.listMany();
  }

  @Post()
  public async create(
    @Body() payload: TenderPayload,
  ): Promise<void> {
    return await this.tenderService.create(payload);
  }

  @Put(':id/:time/:isFinal')
  public async setTenderDate(
    @Param('id') entityId: string,
    @Param('time') time: string,
    @Param('isFinal') isFinal: string,
  ): Promise<TenderPayload> {
    return await this.tenderService.setTenderDate(entityId, time, isFinal);
  }



  @Get(':id')
  public async getById(@Param('id') entityId: string): Promise<TenderPayload> {
    return await this.tenderService.getById(entityId);
  }

  @Put(':id')
  public async update(
    @Param('id') entityId: string,
    @Body() payload: TenderPayload,
  ): Promise<TenderPayload> {
    return await this.tenderService.updateOne(entityId, payload);
  }

  @Delete(':id')
  public async delete(@Param('id') entityId: string): Promise<void> {
    return await this.tenderService.deleteOne(entityId);
  }

  //#endregion

}
