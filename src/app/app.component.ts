import { Component } from '@angular/core';
import {AuthService} from "./auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private authService: AuthService) {
  }

  canUserAccess():boolean{
    return this.authService.isAdmin()
  }

  canAcessItems():boolean{
    return this.authService.isAuthenticated();
  }

  getUsername():string | undefined{
    return this.authService.getUserName();
  }

  logout(){
    return this.authService.loguout();
  }

  title = 'lab-f';
}
