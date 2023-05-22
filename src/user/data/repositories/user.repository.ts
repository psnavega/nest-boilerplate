import { Injectable } from '@nestjs/common';
import { UserEntity } from '../../domains/entities/user.entity';
import { PrismaService } from '@/infra/config/prisma/prisma.service';
import { UserRepositoryInterface } from '../../domains/repositories/UserRepositoryInterface';

@Injectable()
export class UserRepository implements UserRepositoryInterface {
  constructor(private prisma: PrismaService) {}

  async create(user: UserEntity): Promise<void> {
    try {
      await this.prisma.user.create({
        data: {
          name: user.name,
          email: user.email,
          password: user.password,
        },
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}
