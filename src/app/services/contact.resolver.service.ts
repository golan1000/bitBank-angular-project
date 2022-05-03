import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { ContactService } from './contact.service';
import { Contact } from '../models/contact.model';
import { Observable, throwError } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactResolveService implements Resolve<Promise<Contact>> {
  constructor(private contactService: ContactService) {}
  async resolve(route: ActivatedRouteSnapshot) {
    const { id } = route.params;
    if (!id) {
      let emptyContact = this.contactService.getEmptyContact();
      return emptyContact;
    }
    const contact = await this.contactService.getContactById(id).toPromise();
    return contact;
  }
}
