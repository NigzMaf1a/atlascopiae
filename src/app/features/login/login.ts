import { Component } from '@angular/core'
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms'

import { Page } from '../../components/page/page'
import { Form } from '../../components/form/form'
import { Input } from '../../components/input/input'
import { Button } from '../../components/button/button'
import { Text } from '../../components/text/text'
import { Topstrip } from '../../components/topstrip/topstrip'

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    Page,
    Form,
    Input,
    Button,
    Text,
    Topstrip
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  form = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.email
      ]
    }),

    password: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.minLength(8)
      ]
    })
  })

  submitting = false

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched()
      return
    }

    this.submitting = true

    const credentials = this.form.getRawValue()

    console.log(credentials)

    // Authentication request goes here.
  }
}