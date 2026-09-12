import { Themes } from "./theme"
import Session from "../user_in_session"

export type BtnType = 'primary' | 'secondary'

export default class Colors {
    static theme: Themes = Session.getTheme() !== null && Session.getTheme() === 'light' ? 'light' : 'dark'

    static text(): string {
        let color = ''

        if (this.theme === 'light') color = 'text-slate-500'
        else color = 'text-white'

        return color
    }

    static background(): string {
        return this.theme === 'dark' ? 'bg-slate-900' : 'bg-white'
    }

    static button(type: BtnType): string {
        const pri_dark = 'bg-slate-500 border-teal-500 text-white'
        const pri_light = 'bg-teal-500 border-none text-white'
        const sec_pri = 'bg-teal-500 border-none text-white'
        const sec_dark = 'bg-teal-500 border-none text-white'

        const pri = this.theme === 'dark' ? pri_dark : pri_light
        const sec = this.theme === 'dark' ? sec_dark : sec_pri

        switch (type) {
            case 'secondary':
                return sec
            case 'primary':
            default:
                return pri
        }
    }
}