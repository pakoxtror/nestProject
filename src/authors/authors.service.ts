import { Injectable } from '@nestjs/common';
import { Author } from './model/author.model';

@Injectable()
export class AuthorsService {
  private readonly authors: Author[] = [];
  findOneById(id: number) {
    console.log(id);
    return [];
  }
}
