import { Component, input, signal, effect } from '@angular/core'

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

type Trigger = (val: boolean) => void

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  hovered = signal<boolean>(false)
  menu_hovered = input.required<boolean>()
  menuTrigger = input.required<Trigger>()

  constructor() {
    effect(() => {
      if (this.hovered()) {
        console.log('I was hovered')
        this.menuTrigger()
      }
    })
  }

  toggleHover() {
    this.hovered.set(true)
  }

  unToggleHover() {

    if (this.menu_hovered()) return

    const timeout = setTimeout(() => {
      this.hovered.set(false)
      console.log('Its working : Untoggle')
    }, 3000)

    clearTimeout(timeout)
  }

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
