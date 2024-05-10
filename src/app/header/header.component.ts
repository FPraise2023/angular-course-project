import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() selectPage = new EventEmitter<string>();
  collapsed: boolean = true;

  onPageSelected(page: string) {
    this.selectPage.emit(page);
  }
}
