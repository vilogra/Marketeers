import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { IndexPage } from "./index.page";

const routes: Routes = [
  {
    path: "",
    component: IndexPage,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("../pages/welcome/welcome.module").then(
            m => m.WelcomePageModule
          )
      },
      {
        path: "signin",
        loadChildren: () =>
          import("../pages/signin/signin.module").then(m => m.SigninPageModule)
      },
      {
        path: "signup",
        loadChildren: () =>
          import("../pages/signup/signup.module").then(m => m.SignupPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexPageRoutingModule {}
