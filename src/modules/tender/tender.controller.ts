//#region Imports

import { Body, Controller, Delete, Get, Param, Put } from '@nestjs/common';
import { TenderPayload } from './tender.payload';
import { TenderService } from './tender.service';

//#endregion

@Controller('tenders')
export class TenderController {

  //#region Constructor

  constructor(
    private equipmentService: TenderService,
  ) { }

  //#endregion

  //#region Methods

  @Get()
  public async getAll(): Promise<TenderPayload[]> {
    return await this.equipmentService.listMany();
  }

  @Get(':id')
  public async getById(@Param('id') entityId: string): Promise<TenderPayload> {
    return await this.equipmentService.getById(entityId);
  }

  @Put(':id')
  public async update(
    @Param('id') entityId: string,
    @Body() payload: TenderPayload,
  ): Promise<TenderPayload> {
    return await this.equipmentService.updateOne(entityId, payload);
  }

  @Delete(':id')
  public async delete(@Param('id') entityId: string): Promise<void> {
    return await this.equipmentService.deleteOne(entityId);
  }

  //#endregion

}
