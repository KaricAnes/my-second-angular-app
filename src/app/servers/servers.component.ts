import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-servers',  //by element ---> best option
  //selector: "[app-server]", //by attribute
  selector: '.app-servers',    //by class
  templateUrl: './servers.component.html', //mozemo preko ovog pokazivati na server selector
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  //ovo smo dohvatili u servers.componnet.html-u preko property bindinga
  allowNewServer = false;
  serverCreationStatus = false;
  serverName = "";
  servers = ['Testserver', 'Testserver2'];
  onCreateNewServer() {
    this.serverCreationStatus = true;
    this.servers.push(this.serverName);
  }
  onUpdateServerName(event) {
    //console.log(event.target.value);
    this.serverName = event.target.value;
  }
  constructor() {
    debugger;
    setTimeout(() => {
      this.allowNewServer = true
    },
      2000)
  }

  ngOnInit(): void {
  }

}
