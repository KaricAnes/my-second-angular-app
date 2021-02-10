import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  playerName = "Ivan Lendric";
  changePlayerName() {
    debugger;
    if (this.playerName === "Ivan Lendric") {
      this.playerName = "Sinisa Stevanovic"
    } else {
      this.playerName = "Ivan Lendric"
    }

  }
  constructor() {
    debugger;
  }

  ngOnInit(): void {
    debugger;
  }

}
