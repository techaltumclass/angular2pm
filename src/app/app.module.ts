import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { AppService } from './app.service';
import { ChnageclassDirective } from './chnageclass.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { CustomTextPipe } from './pipes/custom-text.pipe';
import { AddUpdateEmployeeComponent } from './add-update-employee/add-update-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TypescriptComponent,
    ChnageclassDirective,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    CustomTextPipe,
    AddUpdateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
