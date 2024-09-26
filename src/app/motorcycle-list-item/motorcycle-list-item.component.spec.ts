import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotorcycleListItemComponent } from './motorcycle-list-item.component';

describe('MotorcycleListItemComponent', () => {
  let component: MotorcycleListItemComponent;
  let fixture: ComponentFixture<MotorcycleListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MotorcycleListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotorcycleListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
