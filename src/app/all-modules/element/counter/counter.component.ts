import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/core.index'
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  public routes = routes;
  clients: number = 0;
  sales: number = 0;
  projects: number = 0;

  countUP: number = 0;
  countDownFromThree: number = 259200;
  countDownFromThirty: number = 30;
  countDownFromTen: number = 10;

  countFromZero: any = '00 Day 00 : 00 : 00';
  countFromThree: any = '00 Day 00 : 03 : 00';
  countFromThirty: any = '00 Day 00 : 00 : 30';
  countFromTen: any = '00 Day 00 : 00 : 10';
  countFromThreeWithUnit: any = '00 Day 00 : 00 : 10';

  firstCounter: any;
  secondCounter: any;
  thirdCounter: any;
  fourthCounter: any;

  constructor() {
    this.startTimer();
    this.startCounter();
  }

  ngOnInit(): void {}

  private startCounter(): void {
    for (var i = 0; i < 3000; i++) {
      for (var i = 0; i < 10000; i++) {
        for (var i = 0; i < 15000; i++) {
          setTimeout(() => {
            if (this.clients < 3000) this.clients++;
            if (this.sales < 10000) this.sales++;
            if (this.projects < 15000) this.projects++;
          });
        }
      }
    }
  }

  private startTimer() {
    this.firstCounter = setInterval(() => {
      if (this.countUP === 0) {
        this.countUP++;
      } else {
        this.countUP++;
      }
      this.countFromZero = this.transform(this.countUP);
    }, 1000);

    this.secondCounter = setInterval(() => {
      if (this.countDownFromThree === 0) {
        this.countDownFromThree--;
      } else {
        this.countDownFromThree--;
      }
      this.countFromThree = this.transform(this.countDownFromThree);
      this.countFromThreeWithUnit = this.transformWithUnit(
        this.countDownFromThree
      );
    }, 1000);
    this.thirdCounter = setInterval(() => {
      if (this.countDownFromThirty <= 30 && this.countDownFromThirty > 20) {
        this.countDownFromThirty--;
      }
      this.countFromThirty = this.transform(this.countDownFromThirty);
    }, 1000);
    this.fourthCounter = setInterval(() => {
      if (this.countDownFromTen <= 10 && this.countDownFromTen >= 1) {
        this.countDownFromTen--;
      }
      this.countFromTen = this.transform(this.countDownFromTen);
    }, 1000);
  }
  private transform(value: number): string {
    let space = ' ';
    let minutes: number = Math.floor(value / 60);
    let seconds: number = value - minutes * 60;
    let hours: number = Math.floor(minutes / 60);
    let days: number = Math.floor(hours / 24);

    return (
      days +
      space +
      'Day' +
      space +
      (hours - days * 24) +
      space +
      ':' +
      space +
      (minutes - days * 1440 - (hours - days * 24) * 60) +
      space +
      ':' +
      space +
      seconds
    );
  }

  private transformWithUnit(value: number): string {
    let space = ' ';
    let minutes: number = Math.floor(value / 60);
    let seconds: number = value - minutes * 60;
    let hours: number = Math.floor(minutes / 60);
    let days: number = Math.floor(hours / 24);

    return (
      days +
      space +
      ' Day' +
      space +
      (hours - days * 24) +
      ' Hours' +
      space +
      ':' +
      space +
      (minutes - days * 1440 - (hours - days * 24) * 60) +
      ' Minutes ' +
      space +
      ':' +
      space +
      seconds +
      ' Sec..'
    );
  }
}