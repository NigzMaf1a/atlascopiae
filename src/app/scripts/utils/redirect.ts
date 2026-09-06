import { inject } from '@angular/core'
import { Router } from '@angular/router'

enum Regtypes {
    Manager = 'manager',
    Storeman = 'storeman',
    Assistant = 'assistant'
}

export default class Redirect {
    static router = inject(Router)

    static redirectToDashboard(reg_type: string) {
        if (reg_type.toLowerCase() === Regtypes.Manager.toLowerCase()) {
            this.router.navigate(['/'])
        }

        if (reg_type.toLowerCase() === Regtypes.Assistant.toLowerCase()) {
            this.router.navigate(['/'])
        }

        if (reg_type.toLowerCase() === Regtypes.Storeman.toLowerCase()) {
            this.router.navigate(['/'])
        }
    }
}