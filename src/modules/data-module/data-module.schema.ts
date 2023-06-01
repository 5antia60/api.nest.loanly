import * as mongoose from 'mongoose';

export const DataModuleSchema = new mongoose.Schema({
  tempOff: Number,
  tempOnStop: Number,
  tempOnRunning: Number,
  dateUpdate: Date,
  tenderId: String,
});
