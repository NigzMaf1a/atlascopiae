import Theme from "./theme"
import BreakPoints, { breakpoints } from "../../../service/styles/breakpoints"

interface Menu {
    menu: string
    menuitem: string
    menutext: string
}

export default class MenuAesthetic extends Theme {

    constructor() {
        super()
    }

    menuStyles(): string {
        const p = BreakPoints.getBreakPoint()

        const big = 'w-[250px] h-full'
        const small = 'h-full w-full'

        const dim = breakpoints[p] >= breakpoints['md'] ? big : small
        const aes = ''

        return `${dim} ${aes}`
    }

    menuText(): string {
        const defaults = ''
        const color: string = this.theme === 'light' ? 'text-slate-500' : 'text-white'

        return `${color}`
    }

    styles(): Menu {
        const i_dim = ''

        return {
            menu: `${this.menuStyles()}`,
            menuitem: `${i_dim}`,
            menutext: `${this.menuText()}`
        }
    }

}