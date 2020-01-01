import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements OnInit {

  fragment: string = null;

  constructor() { }

  ngOnInit() {
  }

  show($event){
    this.fragment = $event;
    console.log(this.fragment);
  }

}
