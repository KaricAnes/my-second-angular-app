import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit {
  username = "";
  disableButton = true;

  buttonDisability() {
    if (this.username) {
      this.disableButton = false;
    } else {
      this.disableButton = true;
    }
    return this.disableButton
  }

  onResetUsername() {
    this.username = ""
  };

  constructor() { }

  ngOnInit(): void {
  }

}
