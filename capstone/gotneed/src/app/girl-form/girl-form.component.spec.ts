import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GirlFormComponent } from './girl-form.component';

describe('GirlFormComponent', () => {
  let component: GirlFormComponent;
  let fixture: ComponentFixture<GirlFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GirlFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GirlFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
