import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  fragment: string = null;

  constructor() { }

  ngOnInit() {
  }

  show($event){
    this.fragment = $event;
  }

}
