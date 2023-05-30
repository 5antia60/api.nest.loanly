//#region Imports

import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DataModulePayload } from './data-module.payload';
import { DataModuleService } from './data-module.service';

//#endregion

@Controller('data-modules')
export class DataModuleController {

  //#region Constructor

  constructor(
    private dataModuleService: DataModuleService,
  ) { }

  //#endregion

  //#region Methods

  @Post()
  public async create(
    @Body() payload: DataModulePayload,
  ): Promise<void> {
    return await this.dataModuleService.create(payload);
  }

  @Get()
  public async getAll(): Promise<DataModulePayload[]> {
    return await this.dataModuleService.listMany();
  }

  @Get(':id')
  public async getById(@Param('id') entityId: string): Promise<DataModulePayload> {
    return await this.dataModuleService.getById(entityId);
  }

  @Put(':id')
  public async update(
    @Param('id') entityId: string,
    @Body() payload: DataModulePayload,
  ): Promise<DataModulePayload> {
    return await this.dataModuleService.updateOne(entityId, payload);
  }

  @Delete(':id')
  public async delete(@Param('id') entityId: string): Promise<void> {
    return await this.dataModuleService.deleteOne(entityId);
  }

  //#endregion

}
