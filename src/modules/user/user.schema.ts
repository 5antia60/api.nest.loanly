import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  imageUrl: String,
  password: String,
  celular: String,
  cep: String,
  endereco: String,
  numero: String,
  complemento: String,
  bairro: String,
  cidade: String,
  uf: String,
  empresa: String,
  cnpj: String,
});
