export type Themes = 'light' | 'dark'

export default class Theme {
    public light: boolean = false
    public dark: boolean = false
    public theme: Themes = 'dark'

    constructor() {
        if (this.getTheme() !== null) {
            this.setTheme(this.getTheme())
        } else {
            this.dark = true
            this.light = false

            this.setTheme('dark')
        }
    }

    private jsonStringTo(val: any): string {
        return JSON.stringify(val)
    }

    public setTheme(theme: Themes) {
        if (theme === 'light') {
            this.light = true
            this.theme = 'light'
            localStorage.setItem(theme, this.jsonStringTo(this.light))
        } else {
            this.dark = true
            this.theme = 'dark'
            localStorage.setItem(theme, this.jsonStringTo(this.dark))
        }
    }

    public getTheme(): Themes {
        if (localStorage.getItem('light') !== null) return 'light'
        else return 'dark'
    }
}