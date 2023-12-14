import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getUser(id: string): User {
    return {
      id,
      name: 'aashar',
      email: 'aashar@gmail.com',
    };
  }
}
