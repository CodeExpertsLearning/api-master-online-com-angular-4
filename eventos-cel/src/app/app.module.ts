import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MeucomponentComponent } from './meucomponent/meucomponent.component';
import { MeumoduleModule } from './meucomponent/meumodule/meumodule.module';

import { MaterializeModule } from 'angular2-materialize';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { HttpService } from './http.service';
import { EventsComponent } from './events/events.component';
import { EventSingleComponent } from './events/event-single/event-single.component';

@NgModule({
  declarations: [
    AppComponent,
    MeucomponentComponent,
    EventsComponent,
    EventSingleComponent
  ],
  imports: [
    BrowserModule,
    MeumoduleModule,
    HttpModule,
    MaterializeModule,
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
