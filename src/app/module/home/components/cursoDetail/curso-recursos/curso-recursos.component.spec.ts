import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoRecursosComponent } from './curso-recursos.component';

describe('CursoRecursosComponent', () => {
  let component: CursoRecursosComponent;
  let fixture: ComponentFixture<CursoRecursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursoRecursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoRecursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
