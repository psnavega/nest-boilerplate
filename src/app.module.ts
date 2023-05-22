import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaModule } from './infra/config/prisma/prisma.module';

@Module({
  imports: [UserModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
