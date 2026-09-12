import BreakPoints from "../../../service/styles/breakpoints"

export default class Measurement {

    static fullWidth(more: string): string {
        return `w-full ${more}`
    }

    static fullHeight(more: string): string {
        return `h-full ${more}`
    }

    static page(): string {
        return ``
    }

    static btn(): string {
        return `w-30 h-10 rounded-lg`
    }

    static input(): string {
        return ``
    }

    static dropdown(): string {
        return ``
    }

    static menu(): string {
        switch (BreakPoints.getBreakPoint()) {
            case 'sm':
                return 'w-full h-full'
            default:
                return 'h-full w-[250px]'
        }
    }

    static menuitem(): string {
        return `w-full h-10`
    }
}