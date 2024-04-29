import { IsEmail, IsString, IsStrongPassword, Length } from 'class-validator';

export class CreateUserDTO {
	id: number;

	@IsString()
	@Length(3, 63)
	readonly name: string;

	@IsEmail()
	readonly email: string;

	@IsStrongPassword({
		minLength: 6,
		minLowercase: 0,
		minNumbers: 0,
		minSymbols: 0,
		minUppercase: 0
	})
	password: string;
}
