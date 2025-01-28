import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-page',
  imports: [],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css'
})
export class HeroPageComponent {
  constructor(private router: Router) {}
  room(){
    this.router.navigate(['/room-availability-component']);
  }
  event()
  {
    this.router.navigate(['/events']);
  }
  employeeName: string = 'GHANSHYAM';

  onHover(section: string): void {
    console.log(`Hovering over: ${section}`);

}
}
