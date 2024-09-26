import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcyleListComponent } from './motorcyle-list.component';

describe('MotorcyleListComponent', () => {
  let component: MotorcyleListComponent;
  let fixture: ComponentFixture<MotorcyleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotorcyleListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorcyleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
