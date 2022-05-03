import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact.model';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-bit-contacts',
  templateUrl: './bit-contacts.component.html',
  styleUrls: ['./bit-contacts.component.scss'],
})
export class BitContactsComponent implements OnInit {
  contacts;
  contacts$;
  selectedContactId;
  constructor(private contactService: ContactService) {
    contacts: [Contact];
    contacts$: new Observable<Contact[]>();
    selectedContactId: String;
  }

  ngOnInit(): void {
    this.contactService.loadContacts();
    this.contacts$ = this.contactService.contacts$;
  }
  getContacts() {
    // console.log(this.contacts$);
    return 'none';
  }
  clickedBtn() {
    console.log('blaaaa');
    // const contact1: Contact = new Contact('443','blaaa','dfdsf@sdfsdf.com','324324334)
    // const contact1: Contact = {_id:'443',name:'blaaa',email:'dfdsf@sdfsdf.com',phone:'324324334}
    var contact1 = {
      name: 'blaaa',
      email: 'dfdsf@sdfsdf.com',
      phone: '324324334',
    } as Contact;
    this.contactService.saveContact(contact1);
  }

  onSelectEvt($event) {
    console.log('event =', $event);

    this.contactService.deleteContact($event._id);
  }
}
