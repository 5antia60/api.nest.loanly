import * as mongoose from 'mongoose';

export const DataModuleSchema = new mongoose.Schema({
  tempOff: Number,
  tempOnStop: Number,
  tempOnRunning: String,
  dateUpdate: Date,
  tenderId: Number,
});
