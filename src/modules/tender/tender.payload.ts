import { Document } from 'mongoose';

export class TenderPayload extends Document {
  public date1: Date;
  public date2: Date;
  public clientId: number;
  public data_reserva: Date;
  public equipmentId: number;
}
