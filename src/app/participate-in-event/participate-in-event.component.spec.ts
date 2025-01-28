import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipateInEventComponent } from './participate-in-event.component';

describe('ParticipateInEventComponent', () => {
  let component: ParticipateInEventComponent;
  let fixture: ComponentFixture<ParticipateInEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParticipateInEventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipateInEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
