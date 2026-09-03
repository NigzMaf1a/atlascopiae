import { Component, signal, inject, input } from '@angular/core'

interface Styles {
  cont: string
  text: string
}

@Component({
  selector: 'app-tray',
  imports: [],
  templateUrl: './tray.html',
  styleUrl: './tray.css',
})
export class Tray {
  data = input.required<unknown[]>()
  no_data_message = input.required<string>()

  styles(): Styles {
    const flex = this.data.length > 0 ? 'gap-2 flex-col' : 'flex-col justify-center items-center'
    const borders = this.data.length > 0 ? 'border-neutral-300 rounded-lg' : 'border-none rounded-none'
    const text_color = this.data.length > 0 ? 'text-green-500' : 'text-red-500'

    const dim = 'w-full h-[300px]'
    const text_styles = 'text-sm leading-tight tracking-tight'

    return {
      cont: `flex ${flex} ${borders} ${dim}`,
      text: `${text_color} ${text_styles}`
    }
  }
}
