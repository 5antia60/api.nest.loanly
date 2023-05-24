import * as mongoose from 'mongoose';

export const TenderSchema = new mongoose.Schema({
  date1: String,
  date2: String,
  clientId: String,
  data_reserva: String,
  equipmentId: String,
});
