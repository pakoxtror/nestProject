import { Resolver, Query } from '@nestjs/graphql';
import { User } from '../user/model/user.model';

@Resolver((of) => User)
export class UserResolver {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  @Query((returns) => [User])
  async users() {
    return [];
  }
}
