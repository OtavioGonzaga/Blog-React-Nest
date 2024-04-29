import { CreateUserDTO } from './create-user.dto';
import { PartialType } from '@nestjs/mapped-types';

export class PutUserDTO extends CreateUserDTO {}

export class PatchUserDTO extends PartialType(CreateUserDTO) {}
