import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHi() {
    return 'hi';
  }
}
