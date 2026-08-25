import {
  Component,
  forwardRef,
  input
} from '@angular/core'

import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from '@angular/forms'

export interface DropdownOption<T = string | number> {
  label: string
  value: T
}

@Component({
  selector: 'app-dropdown',
  imports: [],
  templateUrl: './dropdown.html',
  styleUrl: './dropdown.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Dropdown),
      multi: true
    }
  ]
})
export class Dropdown {

  options = input.required<DropdownOption[]>()

  placeholder = input<string>('Select an option')
  name = input<string>('')
  id = input<string>('')
  required = input<boolean>(false)

  value: string | number = ''
  disabled = false

  private onChange: (value: string | number) => void = () => { }
  private onTouched: () => void = () => { }

  writeValue(value: string | number | null): void {
    this.value = value ?? ''
  }

  registerOnChange(
    fn: (value: string | number) => void
  ): void {
    this.onChange = fn
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled
  }

  handleChange(event: Event): void {
    const select = event.target as HTMLSelectElement

    this.value = select.value
    this.onChange(select.value)
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