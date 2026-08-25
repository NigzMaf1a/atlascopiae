import { Component, input } from '@angular/core'

type Size = 'xs' | 'sm' | 'lg' | 'xl' | '2xl'
type Color = 'green' | 'red' | 'yellow' | 'black'

@Component({
  selector: 'app-text',
  imports: [],
  templateUrl: './text.html',
  styleUrl: './text.css'
})
export class Text {
  text = input.required<string | number>()
  text_size = input<Size>('sm')
  text_color = input<Color>('black')

  styles(): string {
    const s = this.text_size() === 'xs'
      ? 'text-xs'
      : this.text_size() === 'lg'
        ? 'text-lg'
        : this.text_size() === 'xl'
          ? 'text-xl'
          : this.text_size() === '2xl'
            ? 'text-2xl'
            : 'text-sm'

    const c = this.text_color() === 'green'
      ? 'text-green-500'
      : this.text_color() === 'red'
        ? 'text-red-500'
        : this.text_color() === 'yellow'
          ? 'text-yellow-500'
          : 'text-black'

    const extras = `
    font-sans
    font-normal
    leading-normal
    tracking-normal
    antialiased
  `

    return `${s} ${c} ${extras}`
  }
}