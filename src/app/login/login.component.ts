import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  constructor(private router: Router) { }
  goDashboard() {
    this.router.navigate(['dashboard']); 
  }
  login(){
    if(this.username!=''){
      localStorage.setItem('snovasys',this.username);
      this.goDashboard();
    }
  }
  ngOnInit() {
  }

}
