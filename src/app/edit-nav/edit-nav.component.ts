import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-nav',
  templateUrl: './edit-nav.component.html',
  styleUrls: ['./edit-nav.component.scss']
})
export class EditNavComponent implements OnInit {

  @Output() fragment = new EventEmitter<string>();

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.fragment.subscribe(
      (fragments) => {
        this.fragment.emit(fragments);
      }
    )
  }

}
