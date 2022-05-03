import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';
import { Contact } from '../models/contact.model';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class BitcoinService {
  constructor(private http: HttpClient) {}

  private _bitcoin$ = new BehaviorSubject<any>([]);
  private bitcoin$ = this._bitcoin$.subscribe();

  public loadBitcoinRate() {
    return this.http
      .get<{ answer: string }>(
        'https://blockchain.info/tobtc?currency=USD&value=1'
      )
      .pipe(map((res) => res));
  }

  public updateBitcoinChartData() {
    return this.http
      .get<{ answer: string }>(
        'https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true'
      )
      .pipe(map((res) => res));
  }
}
