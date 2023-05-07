import * as mongoose from 'mongoose';

export const TenderSchema = new mongoose.Schema({
  date1: Date,
  date2: Date,
  clientId: Number,
  data_reserva: Date,
  equipmentId: Number,
});
