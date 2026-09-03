import { Component } from '@angular/core';

@Component({
  selector: 'app-topstrip',
  imports: [],
  templateUrl: './topstrip.html',
  styleUrl: './topstrip.css',
})
export class Topstrip {

  styles(): string {
    return `w-full h-15 fixed top-0 left-0`
  }
}
