import { Document } from 'mongoose';

export class DataModulePayload extends Document {
  public tempOff: number;
  public tempOnStop: number;
  public tempOnRunning: string;
  public dateUpdate: Date;
  public tenderId: number;
}
