import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import { ListComponent } from './list/list.component';
import { FeedbackComponent } from './feedback/feedback.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // ListComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule, RouterModule.forRoot([
      {
        path: 'login',
      component:LoginComponent
    },
      
    {
      path: 'feedback',
    component:FeedbackComponent
  },
    { 
      path: '**', redirectTo: 'login', pathMatch: 'full'
    }
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
