import { Component, inject } from '@angular/core'
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms'

import { ToastrService } from 'ngx-toastr'

import { Page } from '../../components/page/page'
import { Form } from '../../components/form/form'
import { Input } from '../../components/input/input'
import { Button } from '../../components/button/button'
import { Text } from '../../components/text/text'
import { Topstrip } from '../../components/topstrip/topstrip'

import { AuthService } from '../../service/features/auth/auth.service'
import Session from '../../scripts/auth/session'

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

  private authService = inject(AuthService)
  private toastr = inject(ToastrService)

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

    this.authService.login(credentials).subscribe({
      next: (response) => {
        console.log('Login successful:', response)

        this.submitting = false

        Session.storeToken(response.token)
        Session.storeUser(response.user)

        this.toastr.success(
          'You have been logged in successfully.',
          'Login successful'
        )
      },

      error: (error) => {
        console.error('Login failed:', error)

        this.submitting = false

        this.toastr.error(
          'Invalid email or password.',
          'Login failed'
        )
      }
    })
  }
}