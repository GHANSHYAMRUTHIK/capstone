import { Routes } from '@angular/router';
import { HeroPageComponent } from './hero-page/hero-page.component';
import { RoomAvailabilityComponentComponent } from './room-availability-component/room-availability-component.component';
import { EventRequestComponent } from './event-request/event-request.component';
import { CreateEventRequestComponent } from './create-event-request/create-event-request.component';
import { ParticipateInEventComponent } from './participate-in-event/participate-in-event.component';

export const routes: Routes = [
    {path:'',component:HeroPageComponent},
    {path:'homepage',component:HeroPageComponent},
    {path:'room-availability-component',component:RoomAvailabilityComponentComponent    },
    {path:'events',component:EventRequestComponent},
    {path:'create-event-request',component:CreateEventRequestComponent},
    {path:'participate-in-event',component:ParticipateInEventComponent}
];

