import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', length: 255, nullable: false })
  name: string;

  @Column({ name: 'email', length: 255, nullable: false })
  email: string;

  @Column({ name: 'phone', length: 255 })
  phone: string;

  @Column({ name: 'cpf', length: 255, nullable: false })
  cpf: string;

  @Column({ name: 'password', length: 255, nullable: false })
  password: string;

  @Column({ name: 'type_user', nullable: false })
  typeUser: number;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'updated_at' })
  updatedAt: Date;
}
