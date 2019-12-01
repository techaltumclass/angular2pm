import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { AppService } from './app.service';
import { ChnageclassDirective } from './chnageclass.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TypescriptComponent,
    ChnageclassDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
