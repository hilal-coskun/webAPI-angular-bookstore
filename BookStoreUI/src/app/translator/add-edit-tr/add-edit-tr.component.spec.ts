import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTrComponent } from './add-edit-tr.component';

describe('AddEditTrComponent', () => {
  let component: AddEditTrComponent;
  let fixture: ComponentFixture<AddEditTrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditTrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditTrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
