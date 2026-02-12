import { Login } from './component/pages/auth/login/login';
import { Register } from './component/pages/auth/register/register';
import { Home } from './component/pages/home/home';

import { Routes } from '@angular/router';
import { Viewdeals } from './component/pages/viewdeals/viewdeals';
import { Contactinfo } from './component/pages/contactinfo/contactinfo';

export const routes: Routes = [

    { path: '', component: Home },
    { path: 'login', component: Login },
    { path: 'register', component: Register },
    { path: 'viewdeals', component: Viewdeals },
    { path: 'contactinfo', component: Contactinfo }




];
