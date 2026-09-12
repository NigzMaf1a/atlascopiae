import Colors from "./colors"

export type TextType = 'body' | 'head' | 'label' | 'btn'

export default class Text {
    public styles: string = ''

    constructor(t: TextType) {
        switch (t) {
            case 'label':
                this.styles = ''
                return

            case 'head':
                this.styles = ''
                return

            case 'btn':
                this.styles = 'text-sm text-white leading-tight tracking-tight'
                return

            case 'body':
            default:
                this.styles = ''
                return

        }
    }

    getStyles(): string {
        return this.styles
    }
}