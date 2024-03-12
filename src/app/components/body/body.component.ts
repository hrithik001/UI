import { Component } from '@angular/core';
import { DetailsCardComponent } from '../details-card/details-card.component';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-body',
  standalone: true,
  imports: [DetailsCardComponent, NgFor],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent {
  datas = [
    {
      title: 'Interview Details',
      status: true,
      typeTitle: 'Interview type',
      types: ['One Way', 'AI Interview'],
      startingName: 'Submission start date',
      dueName: 'Submission end date',
      startingDate: '12:00 pm, 12 Dec 2023',
      dueDate: '11:59 pm, 14 Dec 2023',
    },
    {
      title: 'Counselling Session',
      status: false,
      typeTitle: 'Counselling type',
      types: ['One on one', 'Career guidance'],
      startingName: 'Time',
      dueName: 'Date',
      startingDate: '12:00 pm - 01:00 pm',
      dueDate: '11:59 pm, 14 Dec 2023',
    },
    {
      title: 'Counselling Session',
      status: false,
      typeTitle: 'Counselling type',
      types: ['One on one', 'Career guidance'],
      startingName: 'Time',
      dueName: 'Date',
      startingDate: '12:00 pm - 01:00 pm',
      dueDate: '11:59 pm, 14 Dec 2023',
    },
  ];
}
