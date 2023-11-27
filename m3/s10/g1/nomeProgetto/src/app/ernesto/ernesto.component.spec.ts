import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErnestoComponent } from './ernesto.component';

describe('ErnestoComponent', () => {
  let component: ErnestoComponent;
  let fixture: ComponentFixture<ErnestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErnestoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErnestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
