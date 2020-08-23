import { Component, OnInit, Input } from '@angular/core';
import { quotes } from "../quotes"

@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.css']
})
export class QuotesDetailComponent implements OnInit {

  upVotes:number =  0 
  downVotes: number = 0

  @Input() description: quotes;

  add(tap: boolean){
    if(tap){
      this.upVotes++;
    }
    return this.upVotes
  }

  down(tap: boolean){
    if(tap){
      this.downVotes++;
    }
    console.log(this.downVotes)
  }




  constructor() { }

  ngOnInit(): void {
  }

}
