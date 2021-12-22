import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditAuComponent } from './add-edit-au.component';

describe('AddEditAuComponent', () => {
  let component: AddEditAuComponent;
  let fixture: ComponentFixture<AddEditAuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditAuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditAuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
