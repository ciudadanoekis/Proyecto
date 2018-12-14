import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AUTH_PROVIDERS } from './authorizeUser.service';
import { LoggedIn2Guard } from './logged-in2.guard';
import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';
import { ContinentComponent } from './index/continent/continent.component';
import { StoreComponent } from './store/store.component';
import { LoginComponent } from './login/login.component';
import { StoreloginComponent } from './storelogin/storelogin.component';
import { MenuComponent } from './menu/menu.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ErrorComponent } from './error/error.component';
import { CommentsComponent } from './store/comments/comments.component';
import { AgmCoreModule } from '@agm/core';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';
import { HeaderComponent } from './header/header.component';

@NgModule({
     declarations: [
          AppComponent,
          IndexComponent,
          AboutComponent,
          ContactComponent,
          ProfileComponent,
          ContinentComponent,
          StoreComponent,
          LoginComponent,
          StoreloginComponent,
          MenuComponent,
          UserLoginComponent,
          ErrorComponent,
          CommentsComponent,
          HeaderComponent
     ],
     imports: [
          BrowserModule,
          AppRoutingModule,
          FormsModule,
          ReactiveFormsModule,
          AgmCoreModule.forRoot({
               apiKey: 'AIzaSyBil8XETYEYAWvv9WsT4potsdyZRQnpUt0'
          }),
          HttpModule,
          DataTablesModule
     ],
     providers: [
          AUTH_PROVIDERS,
          LoggedIn2Guard
     ],
     bootstrap: [AppComponent],

})
export class AppModule {
  constructor(){}
 }
