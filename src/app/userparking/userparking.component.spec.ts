import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserparkingComponent } from './userparking.component';

describe('UserparkingComponent', () => {
  let component: UserparkingComponent;
  let fixture: ComponentFixture<UserparkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserparkingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserparkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
