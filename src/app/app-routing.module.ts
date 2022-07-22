import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FloorComponent } from './features/floor/floor.component';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/login/login.component';

const routes: Routes = [
  {
    path: 'login',

    component: LoginComponent
  },
  {
    path: 'home',

    component: HomeComponent
  },
  {
    path: 'floor',

    component: FloorComponent
  },
  { path: '**', redirectTo: '/home' },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
