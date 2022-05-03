import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ChangeDetectorRef,
} from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { User } from 'src/app/models/user.model';
import { ContactService } from '../../services/contact.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-bit-transfer-fund',
  templateUrl: './bit-transfer-fund.component.html',
  styleUrls: ['./bit-transfer-fund.component.scss'],
})
export class BitTransferFundComponent implements OnInit {
  user: User;
  amount: number;
  userAlertMsg: string;
  userAcceptMsg: string;
  isUserAlertMsgShown: boolean = false;
  isUserAcceptMsgShown: boolean = false;
  @Input() contactData: any;
  @Output() onTransferFund: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor(
    private cb: ChangeDetectorRef,
    private userService: UserService,
    private contactService: ContactService
  ) {}

  onTransferCoins = () => {
    if (this.amount > this.user.coins) {
      this.showAlertMsg('there are no enough coins in your bank account');
      return;
    }
    if (!this.amount || this.amount <= 0) {
      this.showAlertMsg('you have to put a valid number');
      return;
    }
    this.contactService.depositToContact(this.contactData, this.amount);
    this.userService.transferToContact(this.amount, this.contactData);
    this.onTransferFund.emit();
    this.user = this.userService.getUser();
    this.showAcceptMsg('The coins has been transferred successfully');
  };

  onClose = () => {
    this.close.emit();
  };
  ngOnInit(): void {
    this.user = this.userService.getUser();
  }

  showAlertMsg = (msg: string) => {
    this.userAlertMsg = msg;
    this.isUserAlertMsgShown = true;

    setTimeout(() => {
      this.isUserAlertMsgShown = false;
      this.userAlertMsg = '';
      this.cb.detectChanges();
    }, 4000);
  };
  showAcceptMsg = (msg: string) => {
    this.userAcceptMsg = msg;
    this.isUserAcceptMsgShown = true;

    setTimeout(() => {
      this.isUserAcceptMsgShown = false;
      this.userAcceptMsg = '';
      this.cb.detectChanges();
    }, 4000);
  };
}
