import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MeucomponentComponent } from './meucomponent/meucomponent.component';
import { MeumoduleModule } from './meucomponent/meumodule/meumodule.module';

import { HttpService } from './http.service';

@NgModule({
  declarations: [
    AppComponent,
    MeucomponentComponent
  ],
  imports: [
    BrowserModule,
    MeumoduleModule,
    HttpModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
