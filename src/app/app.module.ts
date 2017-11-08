import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { UserComponent } from './Components/user/user.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SingltonModule} from './module/singlton/singlton.module';
import { AboutComponent } from './Components/about/about.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    SingltonModule,
    RouterModule.forRoot( [
      { path: '', component: UserComponent },
      { path: 'about', component: AboutComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
