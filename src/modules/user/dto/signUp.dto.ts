import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SignUpDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'É necessário enviar o name' })
  @IsString()
  public name: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'É necessário enviar o email' })
  @IsEmail({}, { message: 'Formato de email inválido' })
  public email: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'É necessário enviar o imageUrl' })
  @IsString()
  public imageUrl: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'É necessário enviar a password' })
  @IsString()
  public password: string;
}
