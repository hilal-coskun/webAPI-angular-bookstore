import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAuComponent } from './show-au.component';

describe('ShowAuComponent', () => {
  let component: ShowAuComponent;
  let fixture: ComponentFixture<ShowAuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
