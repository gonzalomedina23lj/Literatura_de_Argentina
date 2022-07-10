import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/core/models/book';
import { Time } from 'src/app/core/models/time';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  @Input() public timeline: Time[] = [];
  public timelineRender!: any[];

  constructor() { }

  ngOnInit(): void {
    this.buildFullTimeline();
  }

  private buildFullTimeline(): void {
    const minYear = this.timeline[0].year;
    const maxYear = this.timeline[this.timeline.length - 1].year;
    const diffYears = 5;
    const fullTimeline = new Map<number, Book | undefined>();

    for (let index = minYear - diffYears; index <= maxYear + diffYears; index++) {
      fullTimeline.set(index, undefined);
    }
    this.timeline.forEach(time => fullTimeline.set(time.year, time.book))

    this.timelineRender = Array.from(fullTimeline.entries());
    
  }
}
