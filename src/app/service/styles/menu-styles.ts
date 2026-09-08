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

  menuStyles(): string {
    const p = BreakPoints.getBreakPoint()

    const big = 'w-[250px] h-full'
    const small = 'h-full w-full'

    const dim = breakpoints[p] >= breakpoints['md'] ? big : small
    const aes = ''

    return `${dim} ${aes}`
  }

  bodyStyles(): Body {
    const i_dim = ''

    return {
      menu: `${this.menuStyles()}`,
      menuitem: `${i_dim}`
    }
  }
}
