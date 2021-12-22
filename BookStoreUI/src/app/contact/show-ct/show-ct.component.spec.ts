import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCtComponent } from './show-ct.component';

describe('ShowCtComponent', () => {
  let component: ShowCtComponent;
  let fixture: ComponentFixture<ShowCtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
