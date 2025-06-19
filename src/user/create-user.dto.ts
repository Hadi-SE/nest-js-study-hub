// create-user.dto.ts
import { IsString, IsEmail, Length, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateUserDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @Type(() => Boolean)
  @IsBoolean()
  isActive: boolean;
 
}
