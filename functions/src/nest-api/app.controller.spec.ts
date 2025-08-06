import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;
  let appController: AppController;

  // Setup the testing module before running any tests
  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    // Get an instance of AppController from the compiled module
    appController = app.get<AppController>(AppController);
  });

  // Optional cleanup after all tests
  afterAll(async () => {
    await app.close();
  });

  // Define your test case
  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
