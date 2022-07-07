import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-gsm-statistics-repairers',
  templateUrl: './gsm-statistics-repairers.component.html',
  styleUrls: ['./gsm-statistics-repairers.component.scss']
})
export class GsmStatisticsRepairersComponent implements OnInit {

  public daterange: any = {};

  constructor() { }

  ngOnInit(): void {
  }

  public options: any = {
    locale: { format: 'DD-MM-YYYY' },
    alwaysShowCalendars: false,
    ranges: {
      'Derniers 7 jours': [moment().subtract(7, 'days'), moment().subtract(1, 'days')],
      'Cette semaine': [moment().startOf('isoWeek'), moment().endOf('isoWeek')],
      'Derniers semaine': [moment().subtract(1, 'week').startOf('isoWeek'), moment().subtract(1, 'week').endOf('isoWeek')],
      'Derniers 30 jours': [moment().subtract(30, 'days'), moment().subtract(1, 'days')],
      'Ce mois': [moment().startOf('month'), moment().endOf('month')],
      'Dernier mois': [moment().startOf('month').subtract(1, 'month'), moment().subtract(1, 'month').endOf('month')],
      'Dernier 3 mois': [moment().startOf('month').subtract(3, 'month'), moment().subtract(1, 'month').endOf('month')],
      'Dernier 6 mois': [moment().startOf('month').subtract(6, 'month'), moment().subtract(1, 'month').endOf('month')],
      'Dernier 12 mois': [moment().startOf('month').subtract(12, 'month'), moment().subtract(1, 'month').endOf('month')],
      'Cette année': [moment().startOf('year'), moment()],
    }
  };

  public selectedDate(value: any, datepicker?: any) {
    // this is the date  selected
    console.log(value);

    // any object can be passed to the selected event and it will be passed back here
    datepicker.start = value.start;
    datepicker.end = value.end;

    // use passed valuable to update state
    this.daterange.start = value.start;
    this.daterange.end = value.end;
    this.daterange.label = value.label;
  }

}
