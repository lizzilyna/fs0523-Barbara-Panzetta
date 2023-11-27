import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvanoComponent } from './ivano.component';

describe('IvanoComponent', () => {
  let component: IvanoComponent;
  let fixture: ComponentFixture<IvanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IvanoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IvanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
