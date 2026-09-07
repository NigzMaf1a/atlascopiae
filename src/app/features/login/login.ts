import { Component, inject } from '@angular/core'
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms'
import { forkJoin } from 'rxjs'

import { ToastrService } from 'ngx-toastr'

import { Page } from '../../components/page/page'
import { Form } from '../../components/form/form'
import { Input } from '../../components/input/input'
import { Button } from '../../components/button/button'
import { Text } from '../../components/text/text'
import { Topstrip } from '../../components/topstrip/topstrip'

import { AuthService } from '../../service/features/auth/auth'
import { Department } from '../../service/features/department/department'

import Session from '../../scripts/utils/user_in_session'
import Redirect from '../../scripts/utils/redirect'

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
  private dep = inject(Department)
  private redirect = inject(Redirect)

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

    forkJoin({
      login: this.authService.login(credentials),
      roles: this.dep.readRoles(),
      sectors: this.dep.readSectors()
    }).subscribe({

      next: (data) => {
        console.log('Login successful:', data.login)

        Session.init(
          data.login.user,
          data.login.token,
          data.sectors,
          data.roles
        )

        this.toastr.success(
          'You have been logged in successfully.',
          'Login successful'
        )

        this.submitting = false

        this.redirect.redirectToDashboard(
          String(data.login.user.reg_type)
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