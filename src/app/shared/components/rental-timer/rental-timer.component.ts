import { Component, Input, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-rental-timer',
  templateUrl: './rental-timer.component.html',
  styleUrls: ['./rental-timer.component.css'],
})
export class RentalTimerComponent implements OnInit {
  @Input('class') class!: string;

  rentedDate!: any;
  rentalEndDate!: any;

  constructor() {}

  ngOnInit(): void {
    console.log(dayjs().isBefore(dayjs('2022-21-07')));


  }
}
