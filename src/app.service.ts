import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getReady(): string {
    return 'OK!';
  }
}
