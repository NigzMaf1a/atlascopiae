import { inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr'

import Session from './session'

export const authGuard: CanActivateFn = () => {
    const router = inject(Router)
    const token = Session.getToken()
    const toastr = inject(ToastrService)

    if (token) {
        return true
    }

    toastr.error(
        'No session found.',
        'Please login'
    )

    return router.createUrlTree(['/login'])
}