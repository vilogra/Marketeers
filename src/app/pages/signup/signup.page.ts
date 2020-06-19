import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthConstants } from "../../../config/auth-constants";
import { AuthService } from "./../../services/auth.service";
import { StorageService } from "./../../services/storage.service";
import { ToastService } from "./../../services/toast.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.page.html",
  styleUrls: ["./signup.page.scss"],
})
export class SignupPage implements OnInit {
  postData = {
    name: "",
    email: "",
    password: "",
  };

  constructor(
    private router: Router,
    private authService: AuthService,
    private storageService: StorageService,
    private toastService: ToastService
  ) {}

  ngOnInit() {}

  validateInputs() {
    let name = this.postData.name.trim();
    let password = this.postData.password.trim();
    let email = this.postData.email.trim();
    return (
      this.postData.name &&
      this.postData.password &&
      this.postData.email &&
      name.length > 0 &&
      email.length > 0 &&
      password.length > 0
    );
  }

  signUpAction() {
    if (this.validateInputs()) {
      this.authService.register(this.postData).subscribe(
        (res: any) => {
          if (res.data) {
            this.storageService
              .store(AuthConstants.AUTH, res.data)
              .then((res) => {
                this.router.navigate(["home/feed"]);
              });
          } else {
            this.toastService.presentToast(
              "Data already exists, please enter new details."
            );
          }
        },
        (error: any) => {
          this.toastService.presentToast("Network Issue.");
        }
      );
    } else {
      this.toastService.presentToast("Please enter email, name, or password.");
    }
  }
}
