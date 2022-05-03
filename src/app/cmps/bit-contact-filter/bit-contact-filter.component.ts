import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
@Component({
  selector: 'app-bit-contact-filter',
  templateUrl: './bit-contact-filter.component.html',
  styleUrls: ['./bit-contact-filter.component.scss'],
})
export class BitContactFilterComponent implements OnInit {
  filterBy = {
    term: '',
  };
  constructor(private contactService: ContactService) {
    this.filterBy.term = '';
  }
  onFilterChange = () => {
    this.contactService.loadContacts(this.filterBy);
  };

  ngOnInit(): void {}
}
