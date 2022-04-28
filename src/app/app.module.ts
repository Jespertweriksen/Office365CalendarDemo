import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import  ListView  from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import timeGridPlugin from '@fullcalendar/timegrid';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
  ListView,
  timeGridPlugin
]);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule // register FullCalendar with you app

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
