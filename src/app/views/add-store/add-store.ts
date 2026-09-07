import { Component, input } from '@angular/core'

//components
import { Button } from '../../components/button/button'

type AddMethod = () => void

interface Styles {
  form: string
  holder: string
}

@Component({
  selector: 'app-add-store',
  imports: [Button],
  templateUrl: './add-store.html',
  styleUrl: './add-store.css',
})
export class AddStore {
  method = input.required<AddMethod>()

  styles(): Styles {
    const flex = 'flex flex-col gap-1'

    return {
      form: `w-full h-20 bg-white rounded-lg ${flex}`,
      holder: `w-full h-15 flex flex-row gap-1`
    }
  }
}
