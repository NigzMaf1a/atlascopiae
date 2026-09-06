import { Component, inject, signal } from '@angular/core'
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
import Session from '../../scripts/utils/user_in_session'
import { Department } from '../../service/features/department/department'
import Redirect from '../../scripts/utils/redirect'

//types
import Role from '../../interfaces/roles'
import Sector from '../../interfaces/sectors'

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

  roles = signal<Role[]>([])
  sectors = signal<Sector[]>([])

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
      r: this.dep.readRoles(),
      s: this.dep.readSectors()
    }).subscribe({
      next: (data) => {
        this.roles.set(data.r)
        this.sectors.set(data.s)
      },

      error: (error) => {
        this.toastr.error(error)
        return
      }
    })

    this.authService.login(credentials).subscribe({
      next: (response) => {
        console.log('Login successful:', response)

        this.submitting = false

        Session.init(response.user, response.token, this.sectors(), this.roles())

        this.toastr.success(
          'You have been logged in successfully.',
          'Login successful'
        )

        Redirect.redirectToDashboard(String(response.user.reg_type))
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