import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/users/entity/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dto/create-user.dto';
import { genSalt, hash } from 'bcrypt';

@Injectable()
export class UsersService {
	constructor(
		@InjectRepository(UserEntity)
		private userRepository: Repository<UserEntity>
	) {}

	async findOne(id: number): Promise<UserEntity> {
		const user = await this.userRepository.findOneBy({ id });

		if (user) return user;

		throw new NotFoundException('No user with id ' + id);
	}

	async findAll(): Promise<UserEntity[]> {
		return await this.userRepository.find();
	}

	async crate(data: CreateUserDTO) {
		data.password = await hash(data.password, await genSalt(10));

		const user = this.userRepository.create(data);

		return this.userRepository.save(user);
	}
}
