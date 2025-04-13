import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-findoffice',
  standalone: true,
  imports: [MatMenuModule, MatButtonModule,CommonModule],
  templateUrl: './findoffice.component.html',
  styleUrl: './findoffice.component.css'
})
export class FindofficeComponent {
  uses = [
    { name: 'Office', locations: ['User', 'Brooklyn', 'Queens', 'Other'] },
    { name: 'Retail', locations: ['Manhattan', 'Brooklyn', 'Queens'] },
    { name: 'Medical', locations: ['NoMad','Hudson Yards','Chelsea','Union Square','Union Square', 'East Village','Greenwich Village'] },
    { name: 'Specialty', subtypes: ['Schools', 'Industrial', 'Land'] },
    { name: 'For Sale', subtypes: ['Condominiums', 'Cooperatives', 'Buildings'] }
  ];

  neighborhoods: { [key: string]: string[] } = {
    User: ['Upper East Side','Upper West Side','Inwood','Washington Heights','Manhattanville','Central Harlem','East Harlem', 'Midtown', 'Downtown'],
    Brooklyn: ['Bushwick', 'Williamsburg', 'Park Slope'],
    Queens: ['Astoria', 'Flushing'],
    Other: ['Jersey City', 'Harlem']
  };

  activeUse: string | null = null;
  activeLocation: keyof typeof this.neighborhoods | null = null; // <-- specify the type

  setActiveUse(use: string) {
    this.activeUse = use;
    this.activeLocation = null;
  }

  setActiveLocation(location: keyof typeof this.neighborhoods) {
    this.activeLocation = location; // <-- set the activeLocation as a valid key
  }

  clearHover() {
    this.activeUse = null;
    this.activeLocation = null;
  }
}
