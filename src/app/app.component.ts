import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  pageToDisplay: string = 'recipes';

  onPageSelected(pageName: string) {
    this.pageToDisplay = pageName;
    console.log(this.pageToDisplay);
  }
}
