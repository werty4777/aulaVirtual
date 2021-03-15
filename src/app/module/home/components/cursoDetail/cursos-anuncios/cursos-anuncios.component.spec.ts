import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosAnunciosComponent } from './cursos-anuncios.component';

describe('CursosAnunciosComponent', () => {
  let component: CursosAnunciosComponent;
  let fixture: ComponentFixture<CursosAnunciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosAnunciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosAnunciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
