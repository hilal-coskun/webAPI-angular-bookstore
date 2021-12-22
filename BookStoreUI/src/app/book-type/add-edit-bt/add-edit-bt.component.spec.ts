import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditBtComponent } from './add-edit-bt.component';

describe('AddEditBtComponent', () => {
  let component: AddEditBtComponent;
  let fixture: ComponentFixture<AddEditBtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditBtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditBtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
