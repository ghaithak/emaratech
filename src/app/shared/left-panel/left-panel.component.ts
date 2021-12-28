import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss']
})
export class LeftPanelComponent implements OnInit {

  constructor() { }

  public open:boolean = false;

  ngOnInit(): void {
  }

  toggleOpen() {
    this.open = !this.open;
  }

}
