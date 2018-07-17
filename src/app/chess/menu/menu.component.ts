import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'chess-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  _turnOrder: string;

  @Input()
  set turnOrder(name: string) {
      this._turnOrder = name === 'w'? 'White': 'Black';
  }

  get turnOrder() {
    return this._turnOrder;
  }

  @Output()
  onSave = new EventEmitter();
  save(): void {
    this.onSave.emit();
  }

  @Output()
  onLoad = new EventEmitter();
  load(): void {
    this.onLoad.emit();
  }

  @Output()
  onReset = new EventEmitter();
  reset(): void {
    this.onReset.emit();
  }
}
