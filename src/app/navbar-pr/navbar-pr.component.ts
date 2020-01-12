import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar-pr',
  templateUrl: './navbar-pr.component.html',
  styleUrls: ['./navbar-pr.component.scss']
})
export class NavbarPrComponent implements OnInit {

  @Output() fragment = new EventEmitter<string>();

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.fragment);
    this.route.fragment.subscribe(
      (fragments) => {
        this.fragment.emit(fragments);
        // console.log(fragments);
      }
    );
  }

}
