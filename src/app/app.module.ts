import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BitHomepageComponent } from './pages/bit-homepage/bit-homepage.component';
import { BitContactsComponent } from './pages/bit-contacts/bit-contacts.component';
import { BitContactDetailsComponent } from './pages/bit-contact-details/bit-contact-details.component';
import { BitStatisticsComponent } from './pages/bit-statistics/bit-statistics.component';
import { BitPreviewComponent } from './cmps/bit-preview/bit-preview.component';
import { BitContactListComponent } from './cmps/bit-contact-list/bit-contact-list.component';
import { BitChartComponent } from './cmps/bit-chart/bit-chart.component';
import { BitContactFilterComponent } from './cmps/bit-contact-filter/bit-contact-filter.component';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BitHeaderComponent } from './cmps/bit-header/bit-header.component';
import { BitFooterComponent } from './cmps/bit-footer/bit-footer.component';
import { BitContactEditComponent } from './pages/bit-contact-edit/bit-contact-edit.component';
import { BitTransferFundComponent } from './cmps/bit-transfer-fund/bit-transfer-fund.component';
import { BitMovesListComponent } from './cmps/bit-moves-list/bit-moves-list.component';
@NgModule({
  declarations: [
    AppComponent,
    BitHomepageComponent,
    BitContactsComponent,
    BitContactDetailsComponent,
    BitStatisticsComponent,
    BitPreviewComponent,
    BitContactListComponent,
    BitChartComponent,
    BitContactFilterComponent,
    BitHeaderComponent,
    BitFooterComponent,
    BitContactEditComponent,
    BitTransferFundComponent,
    BitMovesListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
