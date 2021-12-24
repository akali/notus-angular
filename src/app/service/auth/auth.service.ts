import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {SignInModel, SignUpModel} from "src/app/models/auth";
import {Error} from "src/app/models/error";
import {AuthStateEnum} from "./authEnum";
import {applySourceSpanToExpressionIfNeeded} from "@angular/compiler/src/output/output_ast";

@Injectable({
  providedIn: `root`
})
export class AuthService {

  constructor(private router: Router) { }

  getCurrentUsername(): string {
    console.log(localStorage.getItem("username"));
    const username = localStorage.getItem("username");
    if (!!username) {
      return username;
    }
    return "Zhanel";
  }

  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('authState');
  }

  isAuthenticated(): boolean {
    console.log(!!localStorage.getItem('authState'));
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
