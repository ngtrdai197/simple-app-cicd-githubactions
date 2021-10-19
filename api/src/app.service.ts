import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  public getMe() {
    return {
      name: 'Dai Nguyen Update',
      phone: '0375629888',
      age: 24,
      city: 'HCMC',
    };
  }

  public getCoporate() {
    return {
      name: 'Bnk Solution',
    };
  }
}
