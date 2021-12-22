import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBcComponent } from './show-bc.component';

describe('ShowBcComponent', () => {
  let component: ShowBcComponent;
  let fixture: ComponentFixture<ShowBcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowBcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
