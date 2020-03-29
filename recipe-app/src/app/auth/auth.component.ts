import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService, AuthResponseData } from "./auth.service";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"]
})
export class AuthComponent implements OnInit {
  isLoginMode: boolean = true;
  isLoading: boolean = false;
  error: string = null;

  constructor(private authService: AuthService, private router: Router) {}
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  onSubmit(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>;
    if (!form.valid) {
      return;
    }
    if (this.isLoginMode) {
      this.isLoading = true;
      authObs = this.authService.login(email, password);
    } else {
      this.isLoading = true;
      authObs = this.authService.signup(email, password);
    }
    authObs.subscribe(
      resData => {
        this.isLoading = false;
        this.router.navigate(["/recipes"]);
      },
      errorMessage => {
        this.isLoading = false;
        this.error = errorMessage;
      }
    );

    form.reset();
  }
  ngOnInit() {}
}
