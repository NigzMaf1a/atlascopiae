import { Component, input } from '@angular/core'
import { Text } from '../text/text'

type Size = 'xs' | 'sm' | 'lg' | 'xl' | '2xl'
type Color = 'green' | 'red' | 'yellow' | 'black' | 'blue' | 'slate'

@Component({
  selector: 'app-labelledtext',
  imports: [Text],
  templateUrl: './labelledtext.html',
  styleUrl: './labelledtext.css'
})
export class Labelledtext {
  label = input.required<string>()
  value = input.required<string | number>()

  label_size = input<Size>('sm')
  label_color = input<Color>('slate')

  value_size = input<Size>('sm')
  value_color = input<Color>('black')

  styles(): string {
    return `
      w-full
      flex
      flex-row
      items-center
      justify-between
      gap-4
    `
  }
}