//#region Imports

import { Body, Controller, Delete, Get, Param, Put } from '@nestjs/common';
import { EquipmentPayload } from './equipment.payload';
import { EquipmentService } from './equipment.service';

//#endregion

@Controller('equipments')
export class EquipmentController {

  //#region Constructor

  constructor(
    private equipmentService: EquipmentService,
  ) { }

  //#endregion

  //#region Methods

  @Get()
  public async getAll(): Promise<EquipmentPayload[]> {
    return await this.equipmentService.listMany();
  }

  @Get(':id')
  public async getById(@Param('id') entityId: string): Promise<EquipmentPayload> {
    return await this.equipmentService.getById(entityId);
  }

  @Put(':id')
  public async update(
    @Param('id') entityId: string,
    @Body() payload: EquipmentPayload,
  ): Promise<EquipmentPayload> {
    return await this.equipmentService.updateOne(entityId, payload);
  }

  @Delete(':id')
  public async delete(@Param('id') entityId: string): Promise<void> {
    return await this.equipmentService.deleteOne(entityId);
  }

  //#endregion

}
