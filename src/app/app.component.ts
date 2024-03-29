import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import dkLocale from '@fullcalendar/core/locales/da';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calendar_Demo';

  calendarOptions: CalendarOptions = {
    initialView: 'timeGridWeek',
    eventTimeFormat: { // like '14:30:00'
      hour: '2-digit',
      minute: '2-digit',
      meridiem: false,
      hour12: false
    },
    editable: true,
    droppable: true,
    eventDisplay: 'auto',
    displayEventEnd: true,
    eventInteractive: true,
    displayEventTime: true,
    longPressDelay: 0,
    locale: dkLocale,
    events:  [
      {
        //Eksempel på møde, der gentages.
        title  : 'Møderække 1 - denne er booket indtil d. 2/7',
        description: 'first description',
        daysOfWeek: ['1'],
        startRecur: '2022-04-25',
        startTime: '10:30:00',
        endTime: '11:00:00',
        endRecur: '2022-07-02',

      },
      {
        title  : 'Møde 6',
        start  : '2022-04-25T13:00:00',
        end    : '2022-04-25T13:30:00', 
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
        title  : 'Møde 7',
        start  : '2022-04-27T12:00:00',
        end    : '2022-04-27T12:30:00', 
        description: 'first description' 
      },
      {
        title  : 'Møde 8',
        start  : '2022-04-27T13:00:00',
        end    : '2022-04-27T13:30:00', 
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
      timeGridWeek: { buttonText: 'timeGridWeek' }
    },
  
     headerToolbar: {
    left: 'prev,next today',
    center: 'title',
    right: 'listDay,listWeek,timeGridWeek'
  }
  };
}
