import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
	@PrimaryGeneratedColumn()
	readonly id: number;

	@Column({ type: 'varchar', length: 63 })
	name: string;

	@Column({ type: 'varchar', length: 127, unique: true })
	email: string;

	@Column({ type: 'varchar', length: 63 })
	password: string;

	@CreateDateColumn({ name: 'created_at', type: 'timestamp' })
	createdAt: Date;

	@UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
	updatedAt: Date;
}
