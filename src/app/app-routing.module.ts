import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'tela02', loadChildren: './tela02/tela02.module#Tela02PageModule' },
  { path: 'tela03', loadChildren: './tela03/tela03.module#Tela03PageModule' },
  { path: 'tela01', loadChildren: './tela01/tela01.module#Tela01PageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
