import { Component, OnInit} from '@angular/core';
;

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent{

  clicked: boolean = true;
  isActiveUpdate() {
    this.clicked = false;
  }
  isActiveInfo() {
    this.clicked = true;
  }

  constructor() {
  }

}
