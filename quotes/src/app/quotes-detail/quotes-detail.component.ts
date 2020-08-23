import { Component, OnInit, Input } from '@angular/core';
import { quotes } from "../quotes"

@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.css']
})
export class QuotesDetailComponent implements OnInit {

  @Input() description: quotes

  constructor() { }

  ngOnInit(): void {
  }

}
