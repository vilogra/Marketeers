import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeGuard } from "./../guards/home.guard";
import { HomePage } from "./home.page";
import { UserDataResolver } from "../resolvers/userData.resolver";

const routes: Routes = [
  {
    path: "home",
    component: HomePage,
    canActivate: [HomeGuard],
    resolve: {
      userData: UserDataResolver
    },
    children: [
      {
        path: "feed",
        loadChildren: () =>
          import("../pages/feed/feed.module").then(m => m.FeedPageModule)
      },
      {
        path: "cart",
        loadChildren: () =>
          import("../pages/cart/cart.module").then(m => m.CartPageModule)
      },
      {
        path: "settings",
        loadChildren: () =>
          import("../pages/settings/settings.module").then(
            m => m.SettingsPageModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
