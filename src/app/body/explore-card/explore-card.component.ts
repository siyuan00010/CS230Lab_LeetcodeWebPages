import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'lc-explore-card',
  templateUrl: './explore-card.component.html',
  styleUrls: ['./explore-card.component.css']
})
export class ExploreCardComponent{
  @Input() title:string;
  @Input() picture:string;
  @Input() items:number;
  @Input() chapters:number;

  constructor() { 
     this.title='some titles';
     this.chapters= 0;
     this.items= 0;
     this.picture='picture';

  }
  
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }
 


}
