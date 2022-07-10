import { Component, OnInit } from '@angular/core';
import { getBooksByAuthorId, sortByPublishDate } from 'src/app/core/constants/db';
import { Time } from 'src/app/core/models/time';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public timeline!: Time[];

  constructor() { }

  ngOnInit(): void {
    this.buildTimeline();
  }

  private buildTimeline(): void {
    const booksByAuthor = getBooksByAuthorId('auth_7');
    
    this.timeline = sortByPublishDate(booksByAuthor)
      .map(book => ({ year: this.getYearByPublishDate(book.publishDate), book }));
  }

  private getYearByPublishDate(date: string): number {
    return +(date.split('-')[2])
  }

}
