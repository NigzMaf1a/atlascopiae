import { Component, signal, input } from '@angular/core'

//types
import { StoreResponse } from '../../interfaces/store'

interface Styles {
  cont: string
  ref: string
  location: string
  status: string
}

@Component({
  selector: 'app-storeelem',
  imports: [],
  templateUrl: './storeelem.html',
  styleUrl: './storeelem.css',
})
export class Storeelem {
  store = input.required<StoreResponse>()

  styles(): Styles {
    return {
      cont: `w-full h-20 flex flex-row gap-1`,
      ref: ``,
      location: ``,
      status: ``
    }
  }
}
