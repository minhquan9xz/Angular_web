import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySellingComponent } from './category-selling.component';

describe('CategorySellingComponent', () => {
  let component: CategorySellingComponent;
  let fixture: ComponentFixture<CategorySellingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorySellingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorySellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
