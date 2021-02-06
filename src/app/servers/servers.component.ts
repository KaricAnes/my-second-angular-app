import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-servers',  //by element ---> best option
  //selector: "[app-server]", //by attribute
  selector: '.app-servers',    //by class
  templateUrl: './servers.component.html', //mozemo preko ovog pokazivati na server selector
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
