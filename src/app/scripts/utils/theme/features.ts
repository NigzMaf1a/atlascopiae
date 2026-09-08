import Colors from "./colors"
import Measurement from "./measurements"
import Flex from "./flex"

interface MenuStyles {
    body: string
    item: string
}

export default class Features {
    static menuStyles(): MenuStyles {
        return {
            body: `${Colors.background()} ${Measurement.menu()} ${Flex.column('gap-1')}`,
            item: `${Colors.background()} ${Measurement.menuitem()} ${Flex.row('gap-1')}`
        }
    }
}