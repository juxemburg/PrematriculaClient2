import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculaMateriaSelectedComponent } from './matricula-materia-selected.component';

describe('MatriculaMateriaSelectedComponent', () => {
  let component: MatriculaMateriaSelectedComponent;
  let fixture: ComponentFixture<MatriculaMateriaSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatriculaMateriaSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatriculaMateriaSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
