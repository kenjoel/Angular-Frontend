import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appVoteCount]'
})
export class VoteCountDirective {
  upVotes:number =  0 
  downVotes: number = 0


  @HostListener('click') addVotes(){}

  @HostListener("click") addDownVotes(){}


  constructor(private elem:ElementRef) {
   }

   add(tap: boolean){
     if(tap){
       this.upVotes++;
     }
   }

   down(tap: boolean){
     if(!tap){
       this.downVotes++;
     }
   }



}
