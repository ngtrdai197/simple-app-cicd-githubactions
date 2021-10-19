import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('me')
  getMe() {
    return this.appService.getMe();
  }

  @Get('coporate')
  getCoporate() {
    return this.appService.getCoporate();
  }
}
