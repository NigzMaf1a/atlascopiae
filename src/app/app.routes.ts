import { Routes } from '@angular/router'
import { authGuard } from './scripts/auth/authGuard'

//pages
import { Login } from './features/login/login'
import { Landingpage } from './features/landingpage/landingpage'
import { Storeditems } from './features/storeditems/storeditems'

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'landingpage',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'landingpage',
        component: Landingpage
    },
    {
        path: 'storeditems',
        component: Storeditems,
        canActivate: [authGuard]
    }
]