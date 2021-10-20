import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  public getMe() {
    return {
      name: 'Dai Nguyen',
      phone: '0375629888',
      age: 24,
      city: 'HCMC',
      gender: "Male"
    };
  }

  public getCoporate() {
    return {
      name: 'Bnk Solution',
    };
  }
}
