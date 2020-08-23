import { Directive } from '@angular/core';

@Directive({
  selector: '[appVoteCount]'
})
export class VoteCountDirective {
  upVotes:number =  0 
  downVotes: number = 0

  constructor() { }

}
