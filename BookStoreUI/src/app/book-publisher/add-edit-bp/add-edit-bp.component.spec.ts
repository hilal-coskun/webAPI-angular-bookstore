import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditBpComponent } from './add-edit-bp.component';

describe('AddEditBpComponent', () => {
  let component: AddEditBpComponent;
  let fixture: ComponentFixture<AddEditBpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditBpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditBpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
