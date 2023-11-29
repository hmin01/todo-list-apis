import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoService {
  findAll(): string {
    return 'All';
  }
}
