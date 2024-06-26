import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GotComponent } from './got.component';

describe('GotComponent', () => {
  let component: GotComponent;
  let fixture: ComponentFixture<GotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
