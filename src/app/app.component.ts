import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hola gente';

  changeTitle() {
    if (this.title === 'hola gente') {
      this.title = 'adios gente';
    } else {
      this.title = 'hola gente';
    }
  }
}