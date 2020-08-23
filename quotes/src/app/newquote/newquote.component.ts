import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { quotes } from "../quotes"

@Component({
  selector: 'app-newquote',
  templateUrl: './newquote.component.html',
  styleUrls: ['./newquote.component.css']
})
export class NewquoteComponent implements OnInit {
  @Output() newQuote = new EventEmitter<quotes>();

  quoteHolder = new quotes("","","");

  renderContentToParent(){
    this.newQuote.emit(this.quoteHolder)
  }



  constructor() { }

  ngOnInit(): void {
  }

}
