import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TypescriptComponent } from './typescript/typescript.component';


const routes: Routes = [
  {
    'path':'',
    component: HomeComponent
  },
  {
    'path':'home',
    component: HomeComponent
  },
  {
    'path':'typescript',
    component: TypescriptComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
