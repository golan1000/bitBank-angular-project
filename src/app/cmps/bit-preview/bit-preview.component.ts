import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../../models/contact.model';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-bit-preview',
  templateUrl: './bit-preview.component.html',
  styleUrls: ['./bit-preview.component.scss'],
})
export class BitPreviewComponent implements OnInit {
  @Input() contactData: any;
  @Output() onSelect = new EventEmitter<Contact>();
  constructor(private router: Router) {}

  isEditRemoveConShown: false | Boolean;

  ngOnInit(): void {}

  emitSelected() {
    this.onSelect.emit(this.contactData);
  }
}
