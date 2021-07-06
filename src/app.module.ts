import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { UserResolver } from './user/user.resolver';
import { AuthorsResolver } from './authors/authors.resolver';
import { AuthorsService } from './authors/authors.service';
import { PostsService } from './posts/posts.service';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      debug: true,
      playground: true,
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    UserResolver,
    AuthorsResolver,
    AuthorsService,
    PostsService,
  ],
})
export class AppModule {}
