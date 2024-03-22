import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuListingComponent } from './menu-listing.component';

describe('MenuListingComponent', () => {
  let component: MenuListingComponent;
  let fixture: ComponentFixture<MenuListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuListingComponent]
    });
    fixture = TestBed.createComponent(MenuListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
