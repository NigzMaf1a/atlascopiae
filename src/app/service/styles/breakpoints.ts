type BP = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export const breakpoints: Record<BP, number> = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1268,
    '2xl': 1536
}

export default class BreakPoints {

    private static points = breakpoints

    static getBreakPoint(): BP {
        const dim = window.innerWidth

        switch (true) {
            case dim >= this.points['2xl']:
                return '2xl'

            case dim >= this.points.xl:
                return 'xl'

            case dim >= this.points.lg:
                return 'lg'

            case dim >= this.points.md:
                return 'md'

            default:
                return 'sm'
        }
    }
}