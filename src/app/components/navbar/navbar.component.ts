import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-navbar',
  imports: [MatMenuModule,MatToolbarModule, MatButtonModule, MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isCollapsed = true;
}
