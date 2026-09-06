import { Component, input } from '@angular/core'

//type
import { StoreResponse } from '../../interfaces/store'

//components
import { Content } from '../../components/content/content'

interface Styles {
  main: string
  storecard: string
  locationcard: string
}

@Component({
  selector: 'app-storecontent',
  imports: [Content],
  templateUrl: './storecontent.html',
  styleUrl: './storecontent.css',
})
export class Storecontent {
  store = input.required<StoreResponse>()

  styles(): Styles {
    return {
      main: `w-full grid grid-cols-12`,
      locationcard: `w-[400px] h-[250px]`,
      storecard: ``
    }
  }
}
