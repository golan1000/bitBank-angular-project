import { Component } from '@angular/core';
import { BitHomepageComponent } from './pages/bit-homepage/bit-homepage.component';
import { BitContactsComponent } from './pages/bit-contacts/bit-contacts.component';
import { BitContactDetailsComponent } from './pages/bit-contact-details/bit-contact-details.component';
import { BitStatisticsComponent } from './pages/bit-statistics/bit-statistics.component';
import { BitPreviewComponent } from './cmps/bit-preview/bit-preview.component';
import { BitContactListComponent } from './cmps/bit-contact-list/bit-contact-list.component';
import { BitChartComponent } from './cmps/bit-chart/bit-chart.component';
import { BitContactFilterComponent } from './cmps/bit-contact-filter/bit-contact-filter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'exampleangular';
}
