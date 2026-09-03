import { Component, input } from '@angular/core'

@Component({
  selector: 'app-page',
  imports: [],
  templateUrl: './page.html',
  styleUrl: './page.css'
})
export class Page {
  className = input<string>('')

  styles(): string {
    return `
      w-full
      min-h-screen
      bg-slate-900
      px-1
      ${this.className()}
    `
  }
}