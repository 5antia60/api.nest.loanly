import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail({}, { message: 'Formato de email inválido' })
  public email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  public password: string;
}
