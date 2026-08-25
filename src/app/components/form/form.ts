import {
  Component,
  input,
  output
} from '@angular/core'

import {
  FormGroup,
  FormGroupDirective,
  ReactiveFormsModule
} from '@angular/forms'

@Component({
  selector: 'app-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './form.html',
  styleUrl: './form.css',
  viewProviders: [
    FormGroupDirective
  ]
})
export class Form {

  formGroup = input.required<FormGroup>()
  submitted = output<void>()

  submit(event: SubmitEvent): void {
    event.preventDefault()

    this.submitted.emit()
  }

  styles(): string {
    return `
      w-full border
      flex border-neutral-300
      flex-col rounded-lg
      gap-4
      bg-white
      px-2
      py-2
    `
  }
}