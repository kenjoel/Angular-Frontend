import { Component } from '@angular/core';
import { quotes } from './quotes'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: quotes[] = [
    new quotes("for everything that happens, there's a reason","socratis", "kenjoel"),
    new quotes("a russian wedding should be called a soviet union", "lex fridman", "Pres. Joel Muigai")
  ]

  showDetails(index){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  
  addQuote(quote){
    if(quote.quote && quote.author && quote.publisher){
      this.quotes.push(quote)
    }else{
      quote.preventDefault();
    }
    
  }
}
