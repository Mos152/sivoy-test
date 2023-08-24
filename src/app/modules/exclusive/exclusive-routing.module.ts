import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ExclusiveComponent } from './pages/exclusive/exclusive.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'exclusive-page', component: ExclusiveComponent },
      { path: '**', redirectTo: "exclusive-page" }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ExclusiveRoutingModule { }
