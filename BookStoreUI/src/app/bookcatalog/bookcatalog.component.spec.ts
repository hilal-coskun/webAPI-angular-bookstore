import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookcatalogComponent } from './bookcatalog.component';

describe('BookcatalogComponent', () => {
  let component: BookcatalogComponent;
  let fixture: ComponentFixture<BookcatalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookcatalogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookcatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
