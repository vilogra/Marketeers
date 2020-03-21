import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./index/index.module").then(m => m.IndexPageModule)
  },
  {
    path: "",
    loadChildren: () => import("./home/home.module").then(m => m.HomePageModule)
  },
  {
    path: 'testaja',
    loadChildren: () => import('./testaja/testaja.module').then( m => m.TestajaPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
