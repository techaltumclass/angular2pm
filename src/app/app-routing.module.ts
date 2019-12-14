import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';


const routes: Routes = [
  {
    'path': '',
    component: HomeComponent
  },
  {
    'path': 'home',
    component: HomeComponent
  },
  {
    'path': 'employee-list',
    component: EmployeeListComponent
  },
  {
    'path': 'details/:id/:name/:salary',
    component: EmployeeDetailsComponent
  },
  {
    'path': 'typescript',
    component: TypescriptComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
