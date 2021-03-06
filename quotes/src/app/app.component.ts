import { Component } from '@angular/core';
import { quotes } from './quotes'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: quotes[] = [
    new quotes("“The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.”","Michael Cain", "kenjoel",new Date(2020,1,29)),
    new quotes("“When I dare to be powerful – to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.”"
    , "lex fridman", "Pres. Joel Muigai",new Date(2019,5,6)),
    new quotes("“A successful man is one who can lay a firm foundation with the bricks others throw at him.”", "David Brinkly","KenJoel Muigai", new Date(2020,7,21))
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
