import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-bit-header',
  templateUrl: './bit-header.component.html',
  styleUrls: ['./bit-header.component.scss'],
})
export class BitHeaderComponent implements OnInit {
  constructor(private router: Router, private location: Location) {}

  goHome = () => {
    this.router.navigate(['']);
  };
  onBack() {
    // this.router.navigateByUrl('');
    this.location.back();
  }
  ngOnInit(): void {}
}
