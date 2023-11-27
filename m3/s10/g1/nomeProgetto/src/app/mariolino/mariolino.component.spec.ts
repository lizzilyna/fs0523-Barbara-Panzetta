import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MariolinoComponent } from './mariolino.component';

describe('MariolinoComponent', () => {
  let component: MariolinoComponent;
  let fixture: ComponentFixture<MariolinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MariolinoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MariolinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
