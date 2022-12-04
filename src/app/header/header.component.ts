import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  @Output() clickItemEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  clickItem(item: string) {
    this.clickItemEvent.emit(item);
  }

}
