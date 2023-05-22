import { Module } from '@nestjs/common';
import { UserController } from './application/controllers/user.controllers';
import { UserRepository } from './data/repositories/user.repository';
import { CreateUserUseCase } from './data/use-cases/createUser.usecase';
import { PrismaModule } from '@/infra/config/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [UserRepository, CreateUserUseCase],
})
export class UserModule {}
