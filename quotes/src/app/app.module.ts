import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesDetailComponent } from './quotes-detail/quotes-detail.component';
import { NewquoteComponent } from './newquote/newquote.component';
import { VoteCountDirective } from './vote-count.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuotesDetailComponent,
    NewquoteComponent,
    VoteCountDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
