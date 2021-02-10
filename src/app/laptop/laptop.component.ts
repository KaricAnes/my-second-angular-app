import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {
  laptopName = "dssd";
  updateLaptopName(e) {
    this.laptopName = e.target.value;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
