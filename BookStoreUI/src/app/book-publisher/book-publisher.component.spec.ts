import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPublisherComponent } from './book-publisher.component';

describe('BookPublisherComponent', () => {
  let component: BookPublisherComponent;
  let fixture: ComponentFixture<BookPublisherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookPublisherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookPublisherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
