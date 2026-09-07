import { Component, inject } from '@angular/core'
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms'

import { Designations } from '../../../../service/features/designations/designations'

import { Page } from '../../../../components/page/page'

@Component({
  selector: 'app-designations-page',
  imports: [Page],
  templateUrl: './designations-page.html',
  styleUrl: './designations-page.css',
})
export class DesignationsPage {
  designations = inject(Designations)
}
