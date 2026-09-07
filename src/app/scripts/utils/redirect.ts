import { Injectable, inject } from '@angular/core'
import { Router } from '@angular/router'

// scripts
import Session from './user_in_session'

enum Regtypes {
    Manager = 'manager',
    Storeman = 'storeman',
    Assistant = 'assistant'
}

@Injectable({
    providedIn: 'root'
})
export default class Redirect {
    private router = inject(Router)

    redirectToDashboard(reg_type: string) {
        switch (reg_type.toLowerCase()) {
            case Regtypes.Manager:
                this.router.navigate(['/manager/dashboard'])
                break

            case Regtypes.Assistant:
                this.router.navigate(['/assistant/dashboard'])
                break

            case Regtypes.Storeman:
                this.router.navigate(['/storeman/dashboard'])
                break
        }
    }

    redirectToLogin() {
        Session.nukeSession()
        this.router.navigate(['/login'])
    }
}