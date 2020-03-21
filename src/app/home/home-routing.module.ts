import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomePage } from "./home.page";

const routes: Routes = [
  {
    path: "home",
    component: HomePage,
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
