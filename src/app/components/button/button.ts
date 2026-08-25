import { Component, input, output } from '@angular/core'

type ButtonType = 'button' | 'submit' | 'reset'
type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class Button {
  type = input<ButtonType>('button')
  variant = input<ButtonVariant>('primary')
  size = input<ButtonSize>('md')

  disabled = input<boolean>(false)
  loading = input<boolean>(false)

  aria_label = input<string>('')

  clicked = output<MouseEvent>()

  styles(): string {
    const variant = this.variant() === 'secondary'
      ? 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200'
      : this.variant() === 'danger'
        ? 'bg-red-600 text-white hover:bg-red-700'
        : this.variant() === 'success'
          ? 'bg-green-600 text-white hover:bg-green-700'
          : this.variant() === 'ghost'
            ? 'bg-transparent text-neutral-700 hover:bg-neutral-100'
            : 'bg-blue-600 text-white hover:bg-blue-700'

    const size = this.size() === 'sm'
      ? 'h-8 px-3 text-xs'
      : this.size() === 'lg'
        ? 'h-12 px-6 text-base'
        : 'h-10 px-4 text-sm'

    return `
      inline-flex
      items-center
      justify-center
      gap-2
      rounded-md
      font-medium
      whitespace-nowrap
      outline-none
      transition-colors
      focus-visible:ring-2
      focus-visible:ring-blue-500
      focus-visible:ring-offset-2
      ${variant}
      ${size}
      disabled:pointer-events-none
      disabled:cursor-not-allowed
      disabled:opacity-50
    `
  }

  handleClick(event: MouseEvent): void {
    if (this.disabled() || this.loading()) {
      event.preventDefault()
      return
    }

    this.clicked.emit(event)
  }
}