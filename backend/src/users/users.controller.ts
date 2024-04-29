import { Body, Controller, Get, Patch, Post, Put } from '@nestjs/common';
import { ParamID } from 'src/decorators/ParamID.decorator';
import { CreateUserDTO } from './dto/create-user.dto';
import { PatchUserDTO, PutUserDTO } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Get(':id')
	async read(@ParamID() id: number) {
		return await this.usersService.findOne(id);
	}

	@Get()
	async readAll() {
		return await this.usersService.findAll();
	}

	@Post()
	async create(@Body() data: CreateUserDTO) {
		return await this.usersService.crate(data);
	}

	@Put()
	async putUpdate(data: PutUserDTO) {
		console.log(data);
		// TODO: update all
	}

	@Patch()
	async patchUpdate(data: PatchUserDTO) {
		console.log(data);
		// TODO: update partial
	}
}
