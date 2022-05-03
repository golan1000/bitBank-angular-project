import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BitContactDetailsComponent } from './pages/bit-contact-details/bit-contact-details.component';
import { BitContactsComponent } from './pages/bit-contacts/bit-contacts.component';
import { BitHomepageComponent } from './pages/bit-homepage/bit-homepage.component';
import { BitStatisticsComponent } from './pages/bit-statistics/bit-statistics.component';
import { ContactResolveService } from './services/contact.resolver.service';
import { BitContactEditComponent } from './pages/bit-contact-edit/bit-contact-edit.component';
const routes: Routes = [
  {
    path: '',
    component: BitHomepageComponent,
    children: [],
  },
  {
    path: 'contacts',
    component: BitContactsComponent,
  },
  {
    path: 'details/:id',
    component: BitContactDetailsComponent,
    resolve: { contact: ContactResolveService },
  },
  {
    path: 'edit/:id',
    component: BitContactEditComponent,
    resolve: { contact: ContactResolveService },
  },
  {
    path: 'edit',
    component: BitContactEditComponent,
    resolve: { contact: ContactResolveService },
  },
  {
    path: 'stats',
    component: BitStatisticsComponent,
  },
  // {
  //   path: '**',
  //   component: BitHomepageComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
