import { Component, input } from '@angular/core'

//styles
import Measurement from '../../scripts/utils/theme/measurements'
import Flex from '../../scripts/utils/theme/flex'
import Colors from '../../scripts/utils/theme/colors'

//types
import { DesignationResponse } from '../../interfaces/designation'

interface Styles {
  body: string
  right: string
  left: string
  btn: string
  row: string
  label: string
  text: string
}

export type ViewDesig = () => void

@Component({
  selector: 'app-desig-item',
  imports: [],
  templateUrl: './desig-item.html',
  styleUrl: './desig-item.css',
})
export class DesigItem {
  designation = input.required<DesignationResponse>()
  onClick = input.required<ViewDesig>()

  styles(): Styles {
    const more_body = 'h-25 border border-neutral-400 rounded-lg gap-3 bg-white'
    const more_btn = 'hover:cursor-pointer'
    const body_all = `${more_body}`

    return {
      body: Measurement.fullWidth(`${Flex.rowJustifyBtwn()} ${body_all}`),
      left: `w-[75%] h-full flex flex-col gap-3`,
      right: `w-[25%] h-full flex justify-center items-center`,
      btn: `${Measurement.btn()} ${Colors.button('primary')} ${more_btn}`,
      row: `w-full h-5 flex flex-row items-center gap-3 ml-3 mt-4`,
      label: `text-sm text-slate-700 leading-tight tracking-tight`,
      text: `text-sm text-teal-300 leading-tight tracking-tight`
    }
  }
}
