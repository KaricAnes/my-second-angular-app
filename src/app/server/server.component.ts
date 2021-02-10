import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  constructor() { debugger; }
  serverId = 20;
  serverStatus = "onnline";
  
  getStatus() {
    return this.serverStatus;
  }
}
