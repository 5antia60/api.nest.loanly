//#region Imports

import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TenderPayload } from './tender.payload';
import { TenderService } from './tender.service';
import { ApiTags } from '@nestjs/swagger';

//#endregion

@Controller('tenders')
@ApiTags('tenders')
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
  public async create(@Body() payload: TenderPayload): Promise<any> {
    return await this.tenderService.create(payload);
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
