import { PartialType } from '@nestjs/mapped-types';
import { CreateVerificationInstanceDto } from './create-verification-instance.dto';

export class UpdateVerificationInstanceDto extends PartialType(
  CreateVerificationInstanceDto,
) {
  id: string;
}
