import { Component, input } from '@angular/core'

interface Styles {
  cont: string
  holder: string
  text: string
}

@Component({
  selector: 'app-informer',
  imports: [],
  templateUrl: './informer.html',
  styleUrl: './informer.css',
})
export class Informer {
  text = input.required<string>()
  color = input<string>()

  styles(): Styles {
    const dim = 'w-full h-full'
    const flex = 'flex justify-center items-center'
    const margin = ''
    const hold = 'bg-white w-full h-10 flex flex-row justify-center items-center'
    const text_color = this.color ? this.color : 'text-dark'
    const text_def = 'text-sm leading-tight tracking-tight'

    return {
      cont: `${dim} ${flex} ${margin}`,
      holder: `${hold}`,
      text: `${text_color} ${text_def}`
    }
  }
}
