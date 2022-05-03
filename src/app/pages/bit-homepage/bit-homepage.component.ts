import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { BitcoinService } from 'src/app/services/bitcoin.service';
@Component({
  selector: 'app-bit-homepage',
  templateUrl: './bit-homepage.component.html',
  styleUrls: ['./bit-homepage.component.scss'],
})
export class BitHomepageComponent implements OnInit {
  screen: {
    register: boolean;
    welcome: boolean;
  };
  username: string;
  user: User;
  bitcoinRate: any;
  bitcoinChartData: any;
  constructor(
    public userService: UserService,
    public bitcoinService: BitcoinService
  ) {
    this.screen = {
      register: true,
      welcome: false,
    };

    this.bitcoinRate = '0.002324';
    this.user = this.userService.getUser();
  }

  onLogin = () => {
    this.userService.setName(this.username);
    this.user = this.userService.getUser();
  };
  onLogout = () => {
    this.userService.removeUser();
    this.user = this.userService.getUser();
  };

  onClickBitcoin = async () => {
    await this.bitcoinService.loadBitcoinRate().subscribe((data) => {
      this.bitcoinRate = data;
      console.log('data=', data);
    });
  };

  ngOnInit(): void {}
}
