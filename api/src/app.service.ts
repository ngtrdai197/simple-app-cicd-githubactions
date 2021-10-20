import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  getHello(): string {
    return 'Hello there!';
  }

  public getMe() {
    const obj = {
      name: 'Dai Nguyen',
      phone: '0375629888',
      age: 24,
      city: 'HCMC',
      gender: 'Male',
    };
    this.logger.debug(JSON.stringify(obj));
    return obj;
  }

  public getCoporate() {
    const obj = {
      name: 'Bnk Solution',
    };
    this.logger.debug(JSON.stringify(obj));
    return obj;
  }
}
