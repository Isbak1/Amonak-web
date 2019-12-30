import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicity-page',
  templateUrl: './publicity-page.component.html',
  styleUrls: ['./publicity-page.component.scss']
})
export class PublicityPageComponent implements OnInit {

  fragment: string = null;

  constructor() { }

  ngOnInit() {
  }

  show($event){
    this.fragment = $event;
    console.log(this.fragment);
  }

}
