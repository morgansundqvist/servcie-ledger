import { IsBoolean, IsString } from 'class-validator';

export class CreateVerificationDto {
  @IsString()
  name: string;
  @IsString()
  prefix: string;
  @IsString()
  suffix: string;
  @IsBoolean()
  isDefault: boolean;
}
