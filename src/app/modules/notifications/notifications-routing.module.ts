import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificationsComponent } from './pages/notifications/notifications.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'notifications-page', component: NotificationsComponent },
      { path: '**', redirectTo: "notifications-page" }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class NotificationsRoutingModule { }
