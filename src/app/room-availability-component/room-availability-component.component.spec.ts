import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomAvailabilityComponentComponent } from './room-availability-component.component';

describe('RoomAvailabilityComponentComponent', () => {
  let component: RoomAvailabilityComponentComponent;
  let fixture: ComponentFixture<RoomAvailabilityComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomAvailabilityComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomAvailabilityComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
