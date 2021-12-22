import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCtComponent } from './add-edit-ct.component';

describe('AddEditCtComponent', () => {
  let component: AddEditCtComponent;
  let fixture: ComponentFixture<AddEditCtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditCtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditCtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
