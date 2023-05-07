//#region Imports

import { Body, Controller, Delete, Get, Param, Put } from '@nestjs/common';
import { DataModulePayload } from './data-module.payload';
import { DataModuleService } from './data-module.service';

//#endregion

@Controller('data-modules')
export class DataModuleController {

  //#region Constructor

  constructor(
    private equipmentService: DataModuleService,
  ) { }

  //#endregion

  //#region Methods

  @Get()
  public async getAll(): Promise<DataModulePayload[]> {
    return await this.equipmentService.listMany();
  }

  @Get(':id')
  public async getById(@Param('id') entityId: string): Promise<DataModulePayload> {
    return await this.equipmentService.getById(entityId);
  }

  @Put(':id')
  public async update(
    @Param('id') entityId: string,
    @Body() payload: DataModulePayload,
  ): Promise<DataModulePayload> {
    return await this.equipmentService.updateOne(entityId, payload);
  }

  @Delete(':id')
  public async delete(@Param('id') entityId: string): Promise<void> {
    return await this.equipmentService.deleteOne(entityId);
  }

  //#endregion

}
