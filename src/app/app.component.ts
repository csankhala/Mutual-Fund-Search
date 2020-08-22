import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MF Search Engine';
  viewDetailEvent: Event;
  query: string;
  enableList: boolean = true;

  viewDetailEventCalled(event: Event) {
    this.viewDetailEvent = event;
    this.enableList = false;
  }

  toggleListView($event: any) {
    this.enableList = !this.enableList;
  }

  searchEvent(query: string) {
    this.query = query;
    this.enableList = true;
  }
}
