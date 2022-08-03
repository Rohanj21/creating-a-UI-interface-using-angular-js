import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {path: 'home', component : HomeComponent},
    {path: '', component : HomeComponent}

];

export const appRoutingModule = RouterModule.forRoot(routes);
