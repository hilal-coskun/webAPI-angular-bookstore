import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBkComponent } from './show-bk.component';

describe('ShowBkComponent', () => {
  let component: ShowBkComponent;
  let fixture: ComponentFixture<ShowBkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowBkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
