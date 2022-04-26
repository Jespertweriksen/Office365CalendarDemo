import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calendar_Demo';

  calendarOptions: CalendarOptions = {
    initialView: 'listWeek',
    events:  [
      {
        title  : 'Møde 1',
        start  : '2022-04-25T12:00:00',
        end    : '2022-04-25T12:30:00', 
        description: 'first description' 
      },
      {
        title  : 'Møde 2',
        start  : '2022-04-26T13:00:00',
        end    : '2022-04-26T13:30:00', 
        description: 'first description' 
      },
      {
        title  : 'Møde 3',
        start  : '2022-04-27T11:00:00',
        end    : '2022-04-27T11:30:00', 
        description: 'first description' 
      },
      {
        title  : 'Ingen møder denne dag',
        start  : '2022-04-28',
        end    : '2022-04-28',
        allDay : true,
      },
      {
        title  : 'Møde 5',
        start  : '2022-04-29T15:00:00',
        end    : '2022-04-29T15:30:00', 
        description: 'first description' 
      }
    ],
    showNonCurrentDates: true,
    views: {
      listDay: { buttonText: 'list day' },
      listWeek: { buttonText: 'list week' },
      listMonth: { buttonText: 'list month' }
    },
    headerToolbar: {
      left: 'title',
      center: '',
      right: 'listDay,listWeek,listMonth'
    },
  };
}
