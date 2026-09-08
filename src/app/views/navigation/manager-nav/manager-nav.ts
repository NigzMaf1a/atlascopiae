import { Component, inject } from '@angular/core'
import { Router } from '@angular/router'

type Pages = 'designations' | 'stores'

const managerRoutes: Record<Pages, string> = {
  designations: '/manager/designations',
  stores: '/manager/stores'
}

@Component({
  selector: 'app-manager-nav',
  imports: [],
  templateUrl: './manager-nav.html',
  styleUrl: './manager-nav.css',
})
export class ManagerNav {
  router = inject(Router)

  navDesignations() {
    this.router.navigate([managerRoutes.designations])
  }

  navStores() {
    this.router.navigate([managerRoutes.designations])
  }
}
