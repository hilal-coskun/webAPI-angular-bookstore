import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTrComponent } from './show-tr.component';

describe('ShowTrComponent', () => {
  let component: ShowTrComponent;
  let fixture: ComponentFixture<ShowTrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
