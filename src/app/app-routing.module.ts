import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedIn2Guard  } from './logged-in2.guard';


import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { ContinentComponent } from './index/continent/continent.component';
import { StoreComponent } from './store/store.component';
import { LoginComponent } from './login/login.component';
import { StoreloginComponent } from './storelogin/storelogin.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ErrorComponent} from './error/error.component';
import { CommentsComponent } from './store/comments/comments.component';
import { ContinentGuard } from './continent.guard';



const routes: Routes = [
  { path: '', component: IndexComponent, pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'about', component: AboutComponent },
  { path: 'store/:slug', component: StoreComponent },
  { path: 'user-login', component: LoginComponent},
  { path: 'store-login', component: StoreloginComponent },
  { path: 'register', component: LoginComponent},
  { path: 'profile' , component: ProfileComponent },
  { path: 'login' , component: UserLoginComponent },
  { path: 'error', component:ErrorComponent},
  { path: ':continent', component: ContinentComponent, canActivate: [ContinentGuard] },
  { path: '**', component:ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }