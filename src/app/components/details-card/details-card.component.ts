import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
export interface Card {
  title: string;
  status: boolean;
  typeTitle: string;
  types: string[];
  startingName: string;
  dueName: string;
  startingDate: string;
  dueDate: string;
}
@Component({
  selector: 'app-details-card',
  standalone: true,
  imports: [NgFor],
  templateUrl: './details-card.component.html',
  styleUrl: './details-card.component.css',
})
export class DetailsCardComponent {
  ongoing: boolean = false;
  @Input() item!: Card;
}
