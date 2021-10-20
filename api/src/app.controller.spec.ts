import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('Healthy check api', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
  describe('Fetch information of me', () => {
    it('should return "Object"', () => {
      expect(appController.getMe()).toMatchObject({
        name: 'Dai Nguyen Update',
        phone: '0375629888',
        age: 24,
        city: 'HCMC',
        gender: "Male"
      });
    });
  });
  describe('Fetch coporate name where I working', () => {
    it('should return "Object"', () => {
      expect(appController.getCoporate()).toMatchObject({
        name: 'Bnk Solution',
      });
    });
  });
});
