import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldAddEditComponent } from './field-add-edit.component';

describe('FieldAddEditComponent', () => {
  let component: FieldAddEditComponent;
  let fixture: ComponentFixture<FieldAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
