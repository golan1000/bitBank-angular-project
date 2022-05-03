import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Contact } from '../models/contact.model';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  user: User;
  constructor() {
    this.user = {
      name: 'Bitcoin Monster',
      coins: 100,
      moves: [],
    };
  }

  public transferToContact(amount, contact: Contact) {
    this.user = {
      ...this.user,
      coins: this.user.coins - amount,
    };

    let msg: string = `transfter ${amount.toString()} coins to ${contact.name}`;
    this.user.moves.push({
      data: msg,
    });

    console.log('curr User=', this.user);
  }
  public setName(name: string) {
    this.user.name = name;
  }
  public getName(): string {
    return this.user.name;
  }
  public getUser(): User {
    return this.user;
  }
  public removeUser(): void {
    this.user = {
      name: '',
      coins: 100,
      moves: [],
    };
  }
}
