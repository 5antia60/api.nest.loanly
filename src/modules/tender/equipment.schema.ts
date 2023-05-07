import * as mongoose from 'mongoose';

export const EquipmentSchema = new mongoose.Schema({
  modelo: String,
  potencia: Number,
  peso: Number,
  description: String,
  categoryId: Number,
});
