import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { ClothService } from "../../services/cloth.service";

@Component({
  selector: "app-feed",
  templateUrl: "./feed.page.html",
  styleUrls: ["./feed.page.scss"],
})
export class FeedPage implements OnInit {
  listClothes: any = [];
  public authUser: any;

  slideOpts = {
    initialSlide: 0,
    speed: 400,
  };

  constructor(private clothService: ClothService, private auth: AuthService) {}

  getAllCloth() {
    this.clothService.getAllCloth().subscribe(
      (response) => {
        this.listClothes = response;
      },
      (err) => {
        this.listClothes = [];
      }
    );
  }

  ionViewWillEnter() {
    this.getAllCloth();
  }

  doRefresh(event) {
    this.getAllCloth();
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }

  ngOnInit() {
    this.auth.userData$.subscribe((res: any) => {
      this.authUser = res;
    });
  }
}
