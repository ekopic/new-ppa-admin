import { Component, ChangeDetectionStrategy, Inject, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material';
import { DialogComponent } from "../shared/dialog/dialog.component";

@Component({
  selector: 'app-calendar-dialog',
  template: `
  <h5 class="mt-0">Event action occurred</h5>
  <div>
    Action:
    <pre>{{ data?.action }}</pre>
  </div>
  <div>
    Event:
    <pre>{{ data?.event | json }}</pre>
  </div>
  <button md-button type="button" (click)="dialogRef.close()">Close dialog</button>`
})
export class CalendarDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CalendarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
}

import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';

import { Subject } from 'rxjs/Subject';

import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';
import { UserService } from '../shared/user.service';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-schedule',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent {
  @ViewChild(DialogComponent) dialogComponent: DialogComponent;

  dialogRef: MatDialogRef<CalendarDialogComponent>;
  lastCloseResult: string;
  actionsAlignment: string;
  config: MatDialogConfig = {
    disableClose: false,
    width: '',
    height: '',
    position: {
      top: '',
      bottom: '',
      left: '',
      right: ''
    },
    data: {
      action: '',
      event: []
    }
  };
  numTemplateOpens = 0;

  fullSchedule: any;
  popupVisible: boolean = false;
  scheduleData: any = {};

  view = 'month';

  viewDate: Date = new Date();

  modalData: {
    action: string,
    event: CalendarEvent
  };

  actions: CalendarEventAction[] = [{
    label: '<i class="editButton"></i>',
    onClick: ({ event }: { event: CalendarEvent }): void => {
      this.handleEvent('Edited', event);
    }
  }, {
    label: '<i class="deleteButton"></i>',
    onClick: ({ event }: { event: CalendarEvent }): void => {
      this.fullSchedule = this.fullSchedule.filter(iEvent => iEvent !== event);
      this.handleEvent('Deleted', event);
    }
  }];

  refresh: Subject<any> = new Subject();

  /* events: CalendarEvent[] = [{
    start: subDays(startOfDay(new Date()), 1),
    end: addDays(new Date(), 1),
    title: 'A 3 day event',
    color: colors.red,
    actions: this.actions
  }, {
    start: startOfDay(new Date()),
    title: 'An event with no end date',
    color: colors.yellow,
    actions: this.actions
  }, {
    start: subDays(endOfMonth(new Date()), 3),
    end: addDays(endOfMonth(new Date()), 3),
    title: 'A long event that spans 2 months',
    color: colors.blue,
    actions: this.actions,
  }, {
    start: addHours(startOfDay(new Date()), 2),
    end: new Date(),
    title: 'A draggable and resizable event',
    color: colors.yellow,
    actions: this.actions,
    resizable: {
      beforeStart: true,
      afterEnd: true
    },
    draggable: true
  }]; */

  activeDayIsOpen = true;

  constructor(public dialog: MatDialog, private userService: UserService) { }

  ngOnInit() {
    this.userService.getSchedule().subscribe((data: any) => {
      this.fullSchedule = data;
      this.fullSchedule.forEach(element => {
        element.start = new Date(element.start);
        element.end = new Date(element.end);
        element.title = element.summary;
        element.actions = this.actions;
        //element.color = colors.yellow;
      });
      this.refresh.next();
      /* var oneEvent = this.fullSchedule[1000];
      oneEvent.start = new Date(oneEvent.start);
      oneEvent.end = new Date(oneEvent.end);
      this.events.push({
        start: oneEvent.start,
        end: oneEvent.end,
        title: oneEvent.summary,
        color: colors.red,
        actions: this.actions
      }) */
    });
  }

  dayClicked({ date, events }: { date: Date, events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  eventTimesChanged({ event, newStart, newEnd }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent('Dropped or resized', event);
    this.refresh.next();
  }

  handleEvent(action: string, event: CalendarEvent): void {
    //debugger
    //this.popupVisible = true;
    this.config.data = { event, action };
    this.dialogRef = this.dialog.open(CalendarDialogComponent, this.config);

    this.dialogRef.afterClosed().subscribe((result: string) => {
      this.lastCloseResult = result;
      this.dialogRef = null;
    });
  }

  showPopup() {
    //this.popupVisible = true;
    let dialog = this.dialogComponent.openAddNewEventPopup();
    dialog.afterClosed().subscribe((result: any) => {
      debugger
      if (result) {
        this.lastCloseResult = JSON.parse(result);
        dialog = null;
        /* console.log(this.lastCloseResult['start']);
        console.log(new Date(this.lastCloseResult['start'])); */
        if (this.lastCloseResult['recuring']) {
          for (var i = 0; i < this.lastCloseResult['weeksRecuring']; i++) {
            this.fullSchedule.push({
              title: this.lastCloseResult['summary'],
              start: addDays(new Date(this.lastCloseResult['start']), 7 * i), //add new event for number of recurings
              end: addDays(new Date(this.lastCloseResult['start']), 7 * i),
              color: colors.red,
              resizable: {
                beforeStart: true,
                afterEnd: true
              }
            });
          }
        }
        this.refresh.next();
      }
    });
  }

  addEvent(e: any) {
    debugger
    var temp = this.dialogComponent;
    this.fullSchedule.push({
      title: 'New event',
      start: startOfDay(new Date()),
      end: endOfDay(new Date()),
      color: colors.red,
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      }
    });
    //this.refresh.next();
  }
}
