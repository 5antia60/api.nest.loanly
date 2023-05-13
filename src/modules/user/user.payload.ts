import { Document } from 'mongoose';

export class UserPayload extends Document {
  public name: string;
  public email: string;
  public imageUrl: string;
  public password: string;
  public celular: string;
  public cep: string;
  public endereco: string;
  public numero: string;
  public complemento: string;
  public bairro: string;
  public cidade: string;
  public uf: string;
  public empresa: string;
  public cnpj: string;
}
