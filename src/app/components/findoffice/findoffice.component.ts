import { Component } from '@angular/core';

@Component({
  selector: 'app-findoffice',
  imports: [],
  templateUrl: './findoffice.component.html',
  styleUrl: './findoffice.component.css'
})
export class FindofficeComponent {
  links = [
    { text: 'Find Office Space for Rent in New York' },
    { text: 'Retail Spaces for Rent in New York' },
    { text: 'Flexible Coworking Spaces for Rent in NYC' },
    { text: 'Brooklyn Office Spaces Available for Rent' },
    { text: 'Find Office Space Buildings By Zip Code' },
    { text: 'Affordable Office Rentals in NYC' },
  ];
}
