import { Component, signal, OnInit } from '@angular/core'
import { Page } from '../../components/page/page'
import { Content } from '../../components/content/content'

interface Styles {
  page: string
}

@Component({
  selector: 'app-storeditems',
  imports: [Page, Content],
  templateUrl: './storeditems.html',
  styleUrl: './storeditems.css',
})
export class Storeditems implements OnInit {

  add_btn_clicked = signal(false)

  ngOnInit(): void {

  }

  addStoredItem(): void {
    this.add_btn_clicked.update(value => !value)
  }

  styles(): Styles {
    return {
      page: `flex flex-col`
    }
  }
}
