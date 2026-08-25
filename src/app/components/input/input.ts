import {
  Component,
  forwardRef,
  input
} from '@angular/core'
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from '@angular/forms'

type InputType =
  | 'text'
  | 'email'
  | 'password'
  | 'number'
  | 'tel'
  | 'url'
  | 'search'

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.html',
  styleUrl: './input.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Input),
      multi: true
    }
  ]
})
export class Input implements ControlValueAccessor {

  type = input<InputType>('text')
  placeholder = input<string>('')
  name = input<string>('')
  id = input<string>('')
  autocomplete = input<string>('off')
  required = input<boolean>(false)

  value: string | number = ''
  disabled = false

  private onChange: (value: string) => void = () => { }
  private onTouched: () => void = () => { }

  writeValue(value: string | number | null): void {
    this.value = value ?? ''
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled
  }

  handleInput(event: Event): void {
    const input = event.target as HTMLInputElement

    this.value = input.value
    this.onChange(input.value)
  }

  handleBlur(): void {
    this.onTouched()
  }

  styles(): string {
    return `
      w-full
      h-10
      px-3
      py-2
      rounded-md
      border
      border-neutral-300
      bg-white
      text-sm
      text-neutral-900
      placeholder:text-neutral-400
      shadow-sm
      outline-none
      transition-colors

      focus:border-blue-500
      focus:ring-2
      focus:ring-blue-500/20

      hover:border-neutral-400

      disabled:cursor-not-allowed
      disabled:bg-neutral-100
      disabled:text-neutral-500
      disabled:opacity-70

      invalid:border-red-500
      invalid:ring-red-500/20
    `
  }
}