import { Component, signal, inject, input, computed } from '@angular/core'

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

  styles = computed<Styles>(() => {
    const hasData = this.data().length > 0

    const flex = hasData ? 'gap-2 flex-col' : 'flex-col justify-center items-center'
    const borders = hasData ? 'border-neutral-300 rounded-lg' : 'border-none rounded-none'
    const text_color = hasData ? 'text-green-500' : 'text-red-500'

    const dim = 'w-full h-[300px]'
    const text_styles = 'text-sm leading-tight tracking-tight'

    return {
      cont: `flex ${flex} ${borders} ${dim}`,
      text: `${text_color} ${text_styles}`
    }
  })
}