import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OnlineControlComponent } from './online-control/online-control.component';


const routes: Routes = [
  { path: 'home', component: LoginComponent },
  { path: 'control', component: OnlineControlComponent },
  { path: '**' , redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
