import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamtypesComponent } from './examtypes.component';

describe('ExamtypesComponent', () => {
  let component: ExamtypesComponent;
  let fixture: ComponentFixture<ExamtypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamtypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamtypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
