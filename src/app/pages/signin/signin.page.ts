import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthConstants } from "../../../config/auth-constants";
import { AuthService } from "./../../services/auth.service";
import { StorageService } from "./../../services/storage.service";
import { ToastService } from "./../../services/toast.service";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.page.html",
  styleUrls: ["./signin.page.scss"]
})
export class SigninPage implements OnInit {
  postData = {
    email: "",
    password: ""
  };

  constructor(
    private router: Router,
    private authService: AuthService,
    private storageService: StorageService,
    private toastService: ToastService
  ) {}

  ngOnInit() {}

  validateInputs() {
    let email = this.postData.email.trim();
    let password = this.postData.password.trim();
    return (
      this.postData.email &&
      this.postData.password &&
      email.length > 0 &&
      password.length > 0
    );
  }

  signInAction() {
    if (this.validateInputs()) {
      this.authService.login(this.postData).subscribe(
        (res: any) => {
          if (res.data) {
            this.storageService.store(AuthConstants.AUTH, res).then(res => {
              this.router.navigate(["home/feed"]);
            });
          } else {
            this.toastService.presentToast("Incorrect email or password.");
          }
        },
        (error: any) => {
          this.toastService.presentToast("Network Issue.");
        }
      );
    } else {
      console.log("Please enter email or password");
    }
  }
}
