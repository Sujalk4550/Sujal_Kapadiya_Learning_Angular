import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyMotorComponent } from './modify-motor.component';

describe('ModifyMotorComponent', () => {
  let component: ModifyMotorComponent;
  let fixture: ComponentFixture<ModifyMotorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyMotorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyMotorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
