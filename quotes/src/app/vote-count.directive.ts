import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appVoteCount]'
})
export class VoteCountDirective {
  upVotes:number =  0;
  downVotes: number = 0;


  @HostListener('click') onclick(){
    this.counter(null)
  }

  counter(value: boolean){
    if(value){
      console.log(this.upVotes++)
    }else if(!value){
      console.log(this.downVotes++)
    }else{
      return 0
    }

  }


  constructor(private elem:ElementRef) {
   }

}
