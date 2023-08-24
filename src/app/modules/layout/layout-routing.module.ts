import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guards/auth.guard';
import { LayoutComponent } from './pages/layout.component';
const routes: Routes = [

  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'layout-page', component: LayoutComponent,
        children: [
          {
            path: 'home-module',
            loadChildren: () => import('@modules/home/home.module').then(m => m.HomeModule)
          },
          {
            path: 'create-module',
            loadChildren: () => import('@modules/create/create.module').then(m => m.CreateModule)
          },
          {
            path: 'user-module',
            loadChildren: () => import('@modules/user/user.module').then(m => m.UserModule)  
          },
          {
            path: 'notifications-module',
            loadChildren: () => import('@modules/notifications/notifications.module').then(m => m.NotificationsModule)
          },
          {
            path: 'exclusive-module',
            loadChildren: () => import('@modules/exclusive/exclusive.module').then(m => m.ExclusiveModule)
          },
          { path: '**', redirectTo: "home-module" }
        ]
      },
      { path: '**', redirectTo: "layout-page" }
    ]
  },
 

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class LayoutRoutingModule { }
