import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delivery-nav',
  templateUrl: './delivery-nav.component.html',
  styleUrls: ['./delivery-nav.component.scss']
})
export class DeliveryNavComponent implements OnInit {

  @Output() fragment = new EventEmitter<string>();

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.fragment.subscribe(
      (fragments)=>{
        this.fragment.emit(fragments);
      }
    )

  }

}
