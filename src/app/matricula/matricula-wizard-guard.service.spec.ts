import { TestBed, inject } from '@angular/core/testing';

import { MatriculaWizardGuardService } from './matricula-wizard-guard.service';

describe('MatriculaWizardGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatriculaWizardGuardService]
    });
  });

  it('should be created', inject([MatriculaWizardGuardService], (service: MatriculaWizardGuardService) => {
    expect(service).toBeTruthy();
  }));
});
