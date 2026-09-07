import { Component } from '@angular/core'

//styles
interface Styles {
  body: string
  left: string
  right: string
}

interface TogBtn {
  cont: string
  elem: string
}

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  styles(): Styles {
    const dim = 'w-full h-20'
    const flex = 'fixed top-0 left-0 z-50 flex flex-row justify-between items-center mt-1 mx-0.5'
    const aes = 'bg-white rounded-sm'

    const ch_flex = 'flex flex-row'

    return {
      body: `${dim} ${flex} ${aes}`,
      left: `${ch_flex} w-[80%]`,
      right: `${ch_flex} w-[20%]`
    }

  }

  styleTogBtn(): TogBtn {
    return {
      cont: 'h-10 w-10 flex flex-col justify-evenly items-center bg-none ml-1',
      elem: 'w-full h-1.5 bg-teal-500'
    }
  }
}
