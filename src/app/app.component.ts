import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { BrokerComponent } from './components/broker/broker.component';
import { OfficerealComponent } from './components/officereal/officereal.component';
import { FindofficeComponent } from './components/findoffice/findoffice.component';
import { CityfindComponent } from './components/cityfind/cityfind.component';
import { MailinglistComponent } from './components/mailinglist/mailinglist.component';
import { NewyorofComponent } from './components/newyorof/newyorof.component';
import { FooterComponent } from './components/footer/footer.component';
import { OfficespaceComponent } from './components/officespace/officespace.component';
import { LogimageComponent } from './components/logimage/logimage.component';


@Component({
  selector: 'app-root',
  imports: [NavbarComponent,BrokerComponent,OfficerealComponent,
    AboutComponent,FindofficeComponent,CityfindComponent,MailinglistComponent,NewyorofComponent,
    FooterComponent, OfficespaceComponent,LogimageComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Corrected to styleUrls (plural)
})
export class AppComponent {
  title = 'optimal';
}
