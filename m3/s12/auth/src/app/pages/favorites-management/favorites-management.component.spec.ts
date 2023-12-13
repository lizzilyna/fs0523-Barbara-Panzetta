import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesManagementComponent } from './favorites-management.component';

describe('FavoritesManagementComponent', () => {
  let component: FavoritesManagementComponent;
  let fixture: ComponentFixture<FavoritesManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoritesManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FavoritesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
