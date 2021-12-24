import { Component, OnInit } from "@angular/core";
import { AppComponent } from "src/app/components/base/AppComponent";
import {AuthService} from "src/app/service/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: "app-auth-navbar",
  templateUrl: "./auth-navbar.component.html",
})
export class AuthNavbarComponent extends AppComponent implements OnInit {
  navbarOpen = false;

  constructor(protected authService: AuthService, private router: Router) {
    super()
  }

  ngOnInit(): void {}

  setNavbarOpen() {
    this.navbarOpen = !this.navbarOpen;
  }

  onLogoutClick() {
    this.authService.logout();
    this.router.navigateByUrl("/");
  }
}
