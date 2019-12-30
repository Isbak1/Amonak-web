import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-publicity',
  templateUrl: './nav-publicity.component.html',
  styleUrls: ['./nav-publicity.component.scss']
})
export class NavPublicityComponent implements OnInit {

  @Output() fragment = new EventEmitter<string>();

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.fragment.subscribe(
      (fragments) => {
        this.fragment.emit(fragments);
        // console.log(fragments);
      }
    );
  }

}
