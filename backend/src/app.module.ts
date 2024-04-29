import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './users/entity/user.entity';

@Module({
	imports: [
		UsersModule,
		TypeOrmModule.forRoot({
			type: 'postgres',
			host: 'localhost',
			port: 5432,
			username: 'postgres',
			password: '@Kn5c42p6239avkspostgres',
			database: 'NRUsers',
			entities: [UserEntity],
			synchronize: true
		}),
		ConfigModule.forRoot()
	],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
