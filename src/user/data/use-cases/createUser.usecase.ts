import { Injectable } from '@nestjs/common';
import { UserEntity } from '../../domains/entities/user.entity';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }): Promise<void> {
    const user = new UserEntity();
    user.name = name;
    user.email = email;
    user.password = password;

    await this.userRepository.create(user);
  }
}
