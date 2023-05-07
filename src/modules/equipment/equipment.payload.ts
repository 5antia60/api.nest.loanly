import { Document } from 'mongoose';

export class EquipmentPayload extends Document {
  public modelo: string;
  public potencia: number;
  public peso: number;
  public description: string;
  public categoryId: number;
}
