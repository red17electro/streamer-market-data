import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ManagementComponent} from "./management/management.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'management',
    component: ManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
