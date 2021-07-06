import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  findAll(id: any) {
    console.log(id);
    return [];
  }
}
