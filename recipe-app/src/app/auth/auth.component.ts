import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "./auth.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"]
})
export class AuthComponent implements OnInit {
  isLoginMode: boolean = true;
  isLoading: boolean = false;
  error: string = null;

  constructor(private authService: AuthService) {}
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    if (this.isLoginMode) {
    } else {
      const email = form.value.email;
      const password = form.value.password;
      this.isLoading = true;
      this.authService.signup(email, password).subscribe(
        resData => {
          setTimeout(() => {
            this.isLoading = false;
          }, 1500);

          console.log(resData);
        },
        error => {
          setTimeout(() => {
            this.isLoading = false;
          }, 1500);
          this.error = "An Error Occured";
          console.log(error);
        }
      );
    }

    form.reset();
  }
  ngOnInit() {}
}
