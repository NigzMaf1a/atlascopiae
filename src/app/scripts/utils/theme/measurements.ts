import BreakPoints from "../../../service/styles/breakpoints"

export default class Measurement {
    static page(): string {
        return ``
    }

    static btn(): string {
        return ``
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