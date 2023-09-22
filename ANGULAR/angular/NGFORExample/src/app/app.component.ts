import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NGFORExample';
  items: string[] = ['Item 1', 'Item 2', 'Item 3'];
}
