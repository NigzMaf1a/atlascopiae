import { Component, output } from '@angular/core'

@Component({
  selector: 'app-form',
  imports: [],
  templateUrl: './form.html',
  styleUrl: './form.css'
})
export class Form {
  submitted = output<void>()

  submit(event: SubmitEvent): void {
    event.preventDefault()
    this.submitted.emit()
  }

  styles(): string {
    return `
      w-full
      flex
      flex-col
      gap-4
    `
  }
}