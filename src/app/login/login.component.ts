import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  selected = 'signin' ;
  username: string = '';
  password: string = '';


  constructor(private _router: Router) { }

  ngOnInit() {
  }

  select(selected){
    if (selected == 'signin'){
      this.selected = 'signin' ;
    }
    if (selected == 'signup'){
      this.selected = 'signup' ;
    }
  }

  onLogin(){
    if(this.username == 'admin' && this.password == 'admin'){
      this._router.navigate(['/home']);
    }
    else{
      console.log("error")
    }
  }
}
