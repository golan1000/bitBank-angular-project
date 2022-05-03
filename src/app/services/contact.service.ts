import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { of } from 'rxjs';
import { Contact } from '../models/contact.model';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

const CONTACTS = [
  {
    _id: '5a56640269f443a5d64b32ca',
    name: 'Ochoa Hyde',
    email: 'ochoahyde@renovize.com',
    phone: '+1 (968) 593-3824',
    picture: 'https://faces-img.xcdn.link/thumb-lorem-face-3023_thumb.jpg',
    moves: [
      {
        data: 'transfer 12 coins to user 243123',
      },
      {
        data: 'got 10 coins from user fdisu28328',
      },
    ],
    coins: 100,
  },
  {
    _id: '5a5664025f6ae9aa24a99fde',
    name: 'Hallie Mclean',
    email: 'halliemclean@renovize.com',
    phone: '+1 (948) 464-2888',
    picture: 'https://faces-img.xcdn.link/thumb-lorem-face-3156_thumb.jpg',
    moves: [
      {
        data: 'transfer 12 coins to user 243123',
      },
      {
        data: 'got 10 coins from user fdisu28328',
      },
    ],
    coins: 100,
  },
  {
    _id: '5a56640252d6acddd183d319',
    name: 'Parsons Norris',
    email: 'parsonsnorris@renovize.com',
    phone: '+1 (958) 502-3495',
    picture: 'https://faces-img.xcdn.link/thumb-lorem-face-2815_thumb.jpg',
    moves: [],
    coins: 100,
  },
  {
    _id: '5a566402ed1cf349f0b47b4d',
    name: 'Rachel Lowe',
    email: 'rachellowe@renovize.com',
    phone: '+1 (911) 475-2312',
    picture: 'https://faces-img.xcdn.link/thumb-lorem-face-3754_thumb.jpg',
    moves: [
      {
        data: 'transfer 12 coins to user 243123',
      },
      {
        data: 'got 10 coins from user fdisu28328',
      },
    ],
    coins: 100,
  },
  {
    _id: '5a566402abce24c6bfe4699d',
    name: 'Dominique Soto',
    email: 'dominiquesoto@renovize.com',
    phone: '+1 (807) 551-3258',
    picture: 'https://faces-img.xcdn.link/thumb-lorem-face-1742_thumb.jpg',
    moves: [
      {
        data: 'transfer 12 coins to user 243123',
      },
      {
        data: 'got 10 coins from user fdisu28328',
      },
    ],
    coins: 100,
  },
  {
    _id: '5a566402a6499c1d4da9220a',
    name: 'Shana Pope',
    email: 'shanapope@renovize.com',
    phone: '+1 (970) 527-3082',
    picture: 'https://faces-img.xcdn.link/thumb-lorem-face-1183_thumb.jpg',
    moves: [
      {
        data: 'transfer 12 coins to user 243123',
      },
      {
        data: 'got 10 coins from user fdisu28328',
      },
    ],
    coins: 100,
  },
  {
    _id: '5a566402f90ae30e97f990db',
    name: 'Faulkner Flores',
    email: 'faulknerflores@renovize.com',
    phone: '+1 (952) 501-2678',
    picture: 'https://faces-img.xcdn.link/thumb-lorem-face-1418_thumb.jpg',
    moves: [
      {
        data: 'transfer 12 coins to user 243123',
      },
      {
        data: 'got 10 coins from user fdisu28328',
      },
    ],
    coins: 100,
  },
  {
    _id: '5a5664027bae84ef280ffbdf',
    name: 'Holder Bean',
    email: 'holderbean@renovize.com',
    phone: '+1 (989) 503-2663',
    picture: 'https://faces-img.xcdn.link/thumb-lorem-face-2365_thumb.jpg',
    moves: [
      {
        data: 'transfer 12 coins to user 243123',
      },
      {
        data: 'got 10 coins from user fdisu28328',
      },
    ],
    coins: 100,
  },
  {
    _id: '5a566402e3b846c5f6aec652',
    name: 'Rosanne Shelton',
    email: 'rosanneshelton@renovize.com',
    phone: '+1 (968) 454-3851',
    picture: 'https://faces-img.xcdn.link/thumb-lorem-face-2988_thumb.jpg',
    moves: [
      {
        data: 'transfer 12 coins to user 243123',
      },
      {
        data: 'got 10 coins from user fdisu28328',
      },
    ],
    coins: 100,
  },
  {
    _id: '5a56640272c7dcdf59c3d411',
    name: 'Pamela Nolan',
    email: 'pamelanolan@renovize.com',
    phone: '+1 (986) 545-2166',
    picture: 'https://faces-img.xcdn.link/thumb-lorem-face-1389_thumb.jpg',
    moves: [
      {
        data: 'transfer 12 coins to user 243123',
      },
      {
        data: 'got 10 coins from user fdisu28328',
      },
    ],
    coins: 100,
  },
  {
    _id: '5a5664029a8dd82a6178b15f',
    name: 'Roy Cantu',
    email: 'roycantu@renovize.com',
    phone: '+1 (929) 571-2295',
    picture: 'https://faces-img.xcdn.link/thumb-lorem-face-66_thumb.jpg',
    moves: [
      {
        data: 'transfer 12 coins to user 243123',
      },
      {
        data: 'got 10 coins from user fdisu28328',
      },
    ],
    coins: 100,
  },
  {
    _id: '5a5664028c096d08eeb13a8a',
    name: 'Ollie Christian',
    email: 'olliechristian@renovize.com',
    phone: '+1 (977) 419-3550',
    picture: 'https://faces-img.xcdn.link/thumb-lorem-face-2115_thumb.jpg',
    moves: [
      {
        data: 'transfer 12 coins to user 243123',
      },
      {
        data: 'got 10 coins from user fdisu28328',
      },
    ],
    coins: 100,
  },
  {
    _id: '5a5664026c53582bb9ebe9d1',
    name: 'Nguyen Walls',
    email: 'nguyenwalls@renovize.com',
    phone: '+1 (963) 471-3181',
    picture: 'https://faces-img.xcdn.link/thumb-lorem-face-2478_thumb.jpg',
    moves: [
      {
        data: 'transfer 12 coins to user 243123',
      },
      {
        data: 'got 10 coins from user fdisu28328',
      },
    ],
    coins: 100,
  },
  {
    _id: '5a56640298ab77236845b82b',
    name: 'Glenna Santana',
    email: 'glennasantana@renovize.com',
    phone: '+1 (860) 467-2376',
    picture: 'https://faces-img.xcdn.link/thumb-lorem-face-3804_thumb.jpg',
    moves: [
      {
        data: 'transfer 12 coins to user 243123',
      },
      {
        data: 'got 10 coins from user fdisu28328',
      },
    ],
    coins: 100,
  },
  {
    _id: '5a56640208fba3e8ecb97305',
    name: 'Malone Clark',
    email: 'maloneclark@renovize.com',
    phone: '+1 (818) 565-2557',
    picture: 'https://faces-img.xcdn.link/thumb-lorem-face-1137_thumb.jpg',
    moves: [
      {
        data: 'transfer 12 coins to user 243123',
      },
      {
        data: 'got 10 coins from user fdisu28328',
      },
    ],
    coins: 100,
  },
  {
    _id: '5a566402abb3146207bc4ec5',
    name: 'Floyd Rutledge',
    email: 'floydrutledge@renovize.com',
    phone: '+1 (807) 597-3629',
    picture: 'https://faces-img.xcdn.link/thumb-lorem-face-2909_thumb.jpg',
    moves: [
      {
        data: 'transfer 12 coins to user 243123',
      },
      {
        data: 'got 10 coins from user fdisu28328',
      },
    ],
    coins: 100,
  },
  {
    _id: '5a56640298500fead8cb1ee5',
    name: 'Grace James',
    email: 'gracejames@renovize.com',
    phone: '+1 (959) 525-2529',
    picture: 'https://faces-img.xcdn.link/thumb-lorem-face-2495_thumb.jpg',
    moves: [
      {
        data: 'transfer 12 coins to user 243123',
      },
      {
        data: 'got 10 coins from user fdisu28328',
      },
    ],
    coins: 100,
  },
  {
    _id: '5a56640243427b8f8445231e',
    name: 'Tanner Gates',
    email: 'tannergates@renovize.com',
    phone: '+1 (978) 591-2291',
    picture: 'https://faces-img.xcdn.link/thumb-lorem-face-2725_thumb.jpg',
    moves: [
      {
        data: 'transfer 12 coins to user 243123',
      },
      {
        data: 'got 10 coins from user fdisu28328',
      },
    ],
    coins: 100,
  },
  {
    _id: '5a5664025c3abdad6f5e098c',
    name: 'Lilly Conner',
    email: 'lillyconner@renovize.com',
    phone: '+1 (842) 587-3812',
    picture: 'https://faces-img.xcdn.link/thumb-lorem-face-2559_thumb.jpg',
    moves: [
      {
        data: 'transfer 12 coins to user 243123',
      },
      {
        data: 'got 10 coins from user fdisu28328',
      },
    ],
    coins: 100,
  },
];

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  //mock the server
  private _contactsDb: Contact[] = CONTACTS;

  private _contacts$ = new BehaviorSubject<Contact[]>([]);
  public contacts$ = this._contacts$.asObservable();

  constructor(private http: HttpClient) {}
  public getEmptyContact(): Contact {
    let emptyContact: Contact = {
      name: '',
      email: '',
      phone: '',
      coins: 100,
      picture: this._getRandomProfilePic(),
      moves: [],
    };

    return emptyContact;
  }
  public depositToContact(contact: Contact, amount: number, user: User = null) {
    if (user === null) {
      user = {
        coins: 100,
        moves: [],
        name: 'David Ron',
      };
    }
    console.log('main contact=', contact);
    let foundIdx = this._contactsDb.findIndex((currContact) => {
      return currContact._id === contact._id;
    });

    if (foundIdx === -1) {
      console.log('id not found!');
      return;
    }

    console.log('contact before = ', this._contactsDb[foundIdx]);
    let contactHelper: Contact = {
      ...this._contactsDb[foundIdx],
      coins: this._contactsDb[foundIdx].coins + amount,
    };
    contactHelper.moves.push({
      data: `got: ${amount} from user: ${user.name}`,
    });
    console.log('contact after = ', contactHelper);

    this._contactsDb.splice(foundIdx, 1, contactHelper);

    let contactHelpers: Contact[] = [contactHelper];
    this._contacts$.next(contactHelpers);
    // this._contactsDb[foundIdx].coins =
    //   this._contactsDb[foundIdx].coins + amount;
  }
  public withdrawFromContact(contact: Contact, amount: number) {}

  public loadContacts(filterBy: any = null): void {
    let contacts = this._contactsDb;
    if (filterBy && filterBy.term) {
      contacts = this._filter(contacts, filterBy.term);
    }
    this._contacts$.next(this._sort(contacts));
  }

  public getContactById(id: string): Observable<Contact> {
    //mock the server work
    const contact = this._contactsDb.find((contact) => contact._id === id);

    if (contact) return of(contact);
    else throw new Error('bla123');

    //return an observable
    // return contact
    //   ? of(contact)
    // : throwError(() => console.log(`Contact id ${id} not found!`));
  }

  public deleteContact(id: string) {
    //mock the server work
    this._contactsDb = this._contactsDb.filter((contact) => contact._id !== id);

    // change the observable data in the service - let all the subscribers know
    this._contacts$.next(this._contactsDb);
  }

  public saveContact(contact: Contact) {
    return contact._id
      ? this._updateContact(contact)
      : this._addContact(contact);
  }

  private _updateContact(contact: Contact) {
    //mock the server work
    this._contactsDb = this._contactsDb.map((c) =>
      contact._id === c._id ? contact : c
    );
    // change the observable data in the service - let all the subscribers know
    this._contacts$.next(this._sort(this._contactsDb));
  }

  private _addContact(contact: Contact) {
    //mock the server work
    const newContact = new Contact(
      this._getRandomIntInclusive(400, 400000),
      contact.name,
      contact.email,
      contact.coins,
      contact.phone,
      contact.picture,
      contact.moves
    );
    console.log('newContact=', newContact);
    // if (newContact.setId)
    // newContact.setId(this._getRandomIntInclusive(400, 4000000));
    console.log('newContact=', newContact);
    this._contactsDb.push(newContact);
    this._contacts$.next(this._sort(this._contactsDb));
  }

  private _sort(contacts: Contact[]): Contact[] {
    return contacts.sort((a, b) => {
      if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
        return -1;
      }
      if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
        return 1;
      }

      return 0;
    });
  }

  private _filter(contacts: any, term: string) {
    term = term.toLocaleLowerCase();
    return contacts.filter((contact: any) => {
      return (
        contact.name.toLocaleLowerCase().includes(term) ||
        contact.phone.toLocaleLowerCase().includes(term) ||
        contact.email.toLocaleLowerCase().includes(term)
      );
    });
  }
  private _getRandomIntInclusive(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let finalNum = Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    return String(finalNum);
  }
  private _getRandomProfilePic() {
    function getRandomIntInclusive(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    }

    let rand = getRandomIntInclusive(1, 4000);

    return `https://faces-img.xcdn.link/thumb-lorem-face-${rand}_thumb.jpg`;
  }
}
