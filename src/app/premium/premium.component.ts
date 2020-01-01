import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-premium',
  templateUrl: './premium.component.html',
  styleUrls: ['./premium.component.scss']
})
export class PremiumComponent implements OnInit {

  fragment: string = null;

  constructor() { }

  ngOnInit() {
  }

  show($event){
    this.fragment = $event;
    // console.log($event);
    console.log(this.fragment)
  }

}
