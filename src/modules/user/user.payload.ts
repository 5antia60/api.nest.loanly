import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export class UserPayload extends Document {
  @ApiProperty()
  public name: string;

  @ApiProperty()
  public email: string;

  @ApiProperty()
  public imageUrl: string;

  @ApiProperty()
  public password: string;

  @ApiProperty()
  public celular: string;

  @ApiProperty()
  public cep: string;

  @ApiProperty()
  public endereco: string;

  @ApiProperty()
  public numero: string;

  @ApiProperty()
  public complemento: string;

  @ApiProperty()
  public bairro: string;

  @ApiProperty()
  public cidade: string;

  @ApiProperty()
  public uf: string;

  @ApiProperty()
  public empresa: string;

  @ApiProperty()
  public cnpj: string;
}
