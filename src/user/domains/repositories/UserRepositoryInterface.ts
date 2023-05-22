import { UserEntity } from '../entities/user.entity';

export interface UserRepositoryInterface {
  create(user: UserEntity): Promise<void>;
}
