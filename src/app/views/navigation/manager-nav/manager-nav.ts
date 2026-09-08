import { Component, inject, output, signal } from '@angular/core'
import { Router } from '@angular/router'

//styles
import Features from '../../../scripts/utils/theme/features'

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
  menu_styles = Features.menuStyles()
  router = inject(Router)

  hovered = signal<boolean>(false)

  toggleHover() {
    this.hovered.update(prev => !prev)
  }

  navDesignations() {
    this.router.navigate([managerRoutes.designations])
  }

  navStores() {
    this.router.navigate([managerRoutes.designations])
  }
}
