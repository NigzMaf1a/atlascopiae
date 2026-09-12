import { Component, signal } from '@angular/core'
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms'

import { Designations } from '../../../../service/features/designations/designations'

import { Page } from '../../../../components/page/page'
import { DesigItem } from '../../../../views/desig-item/desig-item'
// import { Header } from '../../../../components/header/header'

//mock data
import data from '../../../../data/data'

//styles
import Features from '../../../../scripts/utils/theme/features'

interface Styles {
  tray: string
  add: string
}

@Component({
  selector: 'app-designations-page',
  imports: [Page, DesigItem],
  templateUrl: './designations-page.html',
  styleUrl: './designations-page.css',
})
export class DesignationsPage {
  menu_hovered = signal<boolean>(false)
  show_detail = signal<boolean>(false)
  add_designation = signal<boolean>(false)

  //mock data - remove
  designations = data.designations

  toggleDetail = () => {
    console.log('Detail clicked')
  }

  triggerMenu() {
    this.menu_hovered.update(prev => !prev)
  }

  toggleDesignationAdd() {
    this.add_designation.update(prev => !prev)
  }

  addDesignation() {
    this.toggleDesignationAdd()
  }

  styles(): Styles {
    return {
      tray: `w-full h-[500px] flex flex-col gap-1 bg-white rounded-sm px-1 py-1 overflow-y-scroll`,
      add: `w-full h-[100px] rounded-sm flex justify-center items-center`
    }
  }

  btnStyles(): string {
    return Features.btnStyles('primary')
  }

  pageStyles(): string {
    return this.add_designation() === true ? 'flex justify-center items-center' : ''
  }


}
