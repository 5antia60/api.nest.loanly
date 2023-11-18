//#region Imports

import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EquipmentPayload } from './equipment.payload';
import { EquipmentService } from './equipment.service';
import { ApiTags } from '@nestjs/swagger';

//#endregion

@Controller('equipments')
@ApiTags('equipments')
export class EquipmentController {

  //#region Constructor

  constructor(
    private equipmentService: EquipmentService,
  ) { }

  //#endregion

  //#region Methods

  @Post()
  public async create(
    @Body() payload: EquipmentPayload,
  ): Promise<void> {
    return await this.equipmentService.create(payload);
  }

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
