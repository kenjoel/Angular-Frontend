import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesDetailComponent } from './quotes-detail/quotes-detail.component';
import { NewquoteComponent } from './newquote/newquote.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotesDetailComponent,
    NewquoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
