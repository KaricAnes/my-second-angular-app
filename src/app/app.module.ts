import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { PlayersComponent } from './players/players.component';
import { PlayerComponent } from './player/player.component';
import { LaptopComponent } from './laptop/laptop.component';
import { FormsModule } from '@angular/forms';
import { Task2Component } from './task2/task2.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { Assignament3Component } from './assignament3/assignament3.component';
import { PhoneComponent } from './phone/phone.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';





@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    PlayersComponent,
    PlayerComponent,
    LaptopComponent,
    Task2Component,
    BooksComponent,
    BookComponent,
    Assignament3Component,
    PhoneComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    NoopAnimationsModule,
    MatSliderModule,
    MatButtonModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
