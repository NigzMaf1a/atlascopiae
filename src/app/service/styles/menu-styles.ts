import { Injectable } from '@angular/core'

import BreakPoints, { breakpoints } from './breakpoints'

interface Body {
  menu: string
  menuitem: string
}

@Injectable({
  providedIn: 'root',
})
export class MenuStyles {
  bodyStyles(): Body {
    const menu_dim = 'h-[400px] w-[250px]'

    const i_dim = ''

    return {
      menu: `${menu_dim}`,
      menuitem: `${i_dim}`
    }
  }
}
