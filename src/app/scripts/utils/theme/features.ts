import Colors from "./colors"
import Measurement from "./measurements"
import Flex from "./flex"
import BreakPoints from "../../../service/styles/breakpoints"
import Text from "./text"

//types
import { BtnType } from "./colors"

type TrayVar = 'vertical' | 'horizontal'

interface MenuStyles {
    body: string
    item: string
}

interface TrayStyles {
    body: string
    label_div: string
    cont_div: string
}

export default class Features {
    static menuStyles(): MenuStyles {
        return {
            body: `${Colors.background()} ${Measurement.menu()} ${Flex.column('gap-1')}`,
            item: `${Colors.background()} ${Measurement.menuitem()} ${Flex.row('gap-1')}`
        }
    }

    static trayStyles(orient: TrayVar): TrayStyles {
        const bp = BreakPoints.getBreakPoint()

        let height = bp === 'sm' ? `h-full` : `h-[300px]`
        let rest = orient === 'vertical' ? `${Flex.column(`${height}`)}` : `${Flex.row(`${height}`)}`

        const label_div_dim = orient === 'vertical' ? 'w-full h-10' : 'h-full w-10'

        return {
            body: `${Measurement.fullWidth(rest)} ${Colors.background()}`,
            label_div: `${Colors.background()} ${label_div_dim}`,
            cont_div: ``
        }
    }

    static btnStyles(btn_type: BtnType): string {
        const stl_btn = new Text('btn').getStyles()
        const hov = 'hover:cursor-pointer'

        return `${Measurement.btn()} ${Colors.button(btn_type)} ${stl_btn} ${hov}`
    }
}