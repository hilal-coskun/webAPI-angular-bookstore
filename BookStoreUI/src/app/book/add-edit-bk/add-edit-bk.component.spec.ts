import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditBkComponent } from './add-edit-bk.component';

describe('AddEditBkComponent', () => {
  let component: AddEditBkComponent;
  let fixture: ComponentFixture<AddEditBkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditBkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditBkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
