import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export class EquipmentPayload extends Document {
  @ApiProperty()
  public modelo: string;

  @ApiProperty()
  public potencia: number;

  @ApiProperty()
  public peso: number;

  @ApiProperty()
  public description: string;

  @ApiProperty()
  public categoryId: number;
}
