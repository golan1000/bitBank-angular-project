import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../../services/contact.service';
import { Contact } from 'src/app/models/contact.model';
@Component({
  selector: 'app-bit-contact-details',
  templateUrl: './bit-contact-details.component.html',
  styleUrls: ['./bit-contact-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BitContactDetailsComponent implements OnInit {
  contact: Contact;

  contactSub$: Subscription;

  isTransferShown: boolean = false;
  isMovesShown: boolean = false;
  constructor(
    private cd: ChangeDetectorRef,
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  onTransfer = (mode) => {
    if (mode === 'open') this.isTransferShown = true;
    else this.isTransferShown = false;
  };
  onMoves = (mode) => {
    if (mode === 'close') this.isMovesShown = false;
    else this.isMovesShown = false;
  };
  onTransferFund = () => {
    console.log('checking for changes!!!');

    let tempContact = this.contact;
    this.contact = this.contactService.getEmptyContact();

    this.contact = tempContact;
    this.cd.markForCheck();
  };
  async ngOnInit() {
    await this.route.data.subscribe((data: any) => {
      this.contact = data.contact;
    });
    this.contactSub$ = await this.contactService.contacts$.subscribe(
      (data: any) => {
        console.log('data got from sub=', data);
        if (data && data.length === 1) {
          if (data[0]._id === this.contact._id) {
            this.contact = data[0];
            console.log('changed the contact==============');
          }
        }
      }
    );

    // this.route.params.subscribe((data) => {
    //   const { id } = data;
    //   if (!id) {
    //     return;
    //   }
    //   const subscribe$ = this.contactService.getContactById(id);
    //   let foundContact = subscribe$.subscribe((contact) => {
    //     console.log('contact = ', contact);
    //     return contact;
    //   });
    //   console.log('foundContact=', foundContact);
    // });
  }
}
