import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditBcComponent } from './add-edit-bc.component';

describe('AddEditBcComponent', () => {
  let component: AddEditBcComponent;
  let fixture: ComponentFixture<AddEditBcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditBcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditBcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
