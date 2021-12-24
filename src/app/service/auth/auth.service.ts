import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {SignInModel, SignUpModel} from "src/app/models/auth";
import {Error} from "src/app/models/error";
import {AuthStateEnum} from "./authEnum";

@Injectable({
  providedIn: `root`
})
export class AuthService {

  constructor(private router: Router) { }

  getCurrentUsername(): string {
    const username = localStorage.getItem("username");
    if (!!!username) {
      return username;
    }
    return "Zhanel";
  }

  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('authState');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('authState');
  }

  isAdmin(): boolean {
    return localStorage.getItem('authState') === AuthStateEnum.ADMIN;
  }

  authorize(profile: SignInModel): Error {
    if (profile.email === "abc@go.com") {
      return {
        message: "Email is blocked",
      };
    }
    localStorage.setItem('username', profile.email);
    localStorage.setItem('authState', AuthStateEnum.AUTHORIZED);
    this.router.navigate(['/']);
    return null;
  }

  register(profile: SignUpModel): Error {
    if (profile.email === "abc@go.com") {
      return {
        message: "Email is blocked",
      };
    }
    localStorage.setItem('username', profile.email);
    localStorage.setItem('authState', AuthStateEnum.AUTHORIZED);
    this.router.navigate(['/']);
    return null;
  }
}
