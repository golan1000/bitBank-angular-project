import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'app-bit-contact-list',
  templateUrl: './bit-contact-list.component.html',
  styleUrls: ['./bit-contact-list.component.scss'],
})
export class BitContactListComponent implements OnInit {
  @Input() contacts = [Contact];
  @Output() onSelect = new EventEmitter<Contact>();

  constructor() {}

  ngOnInit(): void {}
  emitSelected($event) {
    console.log('blaaaa');
    this.onSelect.emit($event);
  }
}
