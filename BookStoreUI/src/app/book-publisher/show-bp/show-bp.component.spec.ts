import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBpComponent } from './show-bp.component';

describe('ShowBpComponent', () => {
  let component: ShowBpComponent;
  let fixture: ComponentFixture<ShowBpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowBpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
