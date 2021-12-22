import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBtComponent } from './show-bt.component';

describe('ShowBtComponent', () => {
  let component: ShowBtComponent;
  let fixture: ComponentFixture<ShowBtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowBtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
