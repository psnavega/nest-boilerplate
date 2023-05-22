import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserUseCase } from '../../data/use-cases/createUser.usecase';
import { CreateUserDto } from 'src/user/dtos/createUser.dto';

@Controller('users')
export class UserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<void> {
    const { name, email, password } = createUserDto;
    await this.createUserUseCase.execute({ name, email, password });
  }
}
