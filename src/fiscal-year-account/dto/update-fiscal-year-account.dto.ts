import { PartialType } from '@nestjs/mapped-types';
import { CreateFiscalYearAccountDto } from './create-fiscal-year-account.dto';

export class UpdateFiscalYearAccountDto extends PartialType(
  CreateFiscalYearAccountDto,
) {
  id: string;
}
