import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent{
  username : string;
  password : string;
  error : string;
  constructor(private authService: AuthService) {
    this.username = "";
    this.password = "";
    this.error = "";
  }
  loginSubmit(){
    this.authService
      .login(this.username,this.password)
      .subscribe(response => {
        if(response && response.token){
          this.error = "";
          this.username = "";
          this.password = "";
        }
        else{
          this.error = "Failed to login";
        }
      })
  }
}
