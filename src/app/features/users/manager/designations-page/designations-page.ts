import { Component, inject } from '@angular/core'
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms'

import { Designations } from '../../../../service/features/designations/designations'

import { Page } from '../../../../components/page/page'
import { Header } from '../../../../components/header/header'

@Component({
  selector: 'app-designations-page',
  imports: [Page, Header],
  templateUrl: './designations-page.html',
  styleUrl: './designations-page.css',
})
export class DesignationsPage {
  designations = inject(Designations)
}
