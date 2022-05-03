import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bit-moves-list',
  templateUrl: './bit-moves-list.component.html',
  styleUrls: ['./bit-moves-list.component.scss'],
})
export class BitMovesListComponent implements OnInit {
  @Input() moves: any;
  @Output() close: EventEmitter<any> = new EventEmitter();
  constructor() {}
  onClose = () => {
    this.close.emit();
  };
  ngOnInit(): void {}
}
