import { HttpClientModule } from './http-client.module';

describe('HttpClientModule', () => {
  let httpClientModule: HttpClientModule;

  beforeEach(() => {
    httpClientModule = new HttpClientModule();
  });

  it('should create an instance', () => {
    expect(httpClientModule).toBeTruthy();
  });
});
