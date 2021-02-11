import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignament3',
  templateUrl: './assignament3.component.html',
  styleUrls: ['./assignament3.component.css']
})
export class Assignament3Component implements OnInit {
  paragraphHidden = false;
  counter = 0;

  counterArr = [];
  onShowHideParagraph() {
    this.paragraphHidden = !this.paragraphHidden;
    this.counter++;
    this.counterArr.push(new Date());
  }
  onCheckHidness() {
    return this.paragraphHidden
  }


  constructor() { }

  ngOnInit(): void {
  }

}
