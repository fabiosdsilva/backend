import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserEntity } from './interfaces/user.entity';
import { CreateUserDto } from './dtos/createUser.dto';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<UserEntity>,
  ) {}

  async getAllUsers(): Promise<UserEntity[]> {
    return this.userRepository.find({
      select: {
        id: true,
        name: true,
        email: true,
        cpf: true,
        phone: true,
      },
    });
  }

  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const saltOrRounds = 10;
    const passwordHashed = await hash(createUserDto.password, saltOrRounds);

    const save = await this.userRepository.save({
      name: createUserDto.name,
      email: createUserDto.email,
      cpf: createUserDto.cpf,
      phone: createUserDto.phone,
      password: passwordHashed,
      typeUser: createUserDto.typeUser | 0,
    });

    return {
      ...createUserDto,
      id: save.id,
      typeUser: save.typeUser,
      password: undefined,
    };
  }
}
