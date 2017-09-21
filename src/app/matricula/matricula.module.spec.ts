import { MatriculaModule } from './matricula.module';

describe('MatriculaModule', () => {
  let matriculaModule: MatriculaModule;

  beforeEach(() => {
    matriculaModule = new MatriculaModule();
  });

  it('should create an instance', () => {
    expect(matriculaModule).toBeTruthy();
  });
});
