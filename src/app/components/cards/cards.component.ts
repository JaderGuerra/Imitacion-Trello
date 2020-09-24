import { Component, OnInit } from '@angular/core';
import { SortablejsOptions } from 'ngx-sortablejs';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  titulos: any[] = [
    { name: 'Cosas que hacer' },
    { name: ' En proceso' },
    { name: 'Finalizadas' },
  ];
  show: boolean = true;
  items1 = [1, 2, 3, 4, 5];
  constructor() {}

  ngOnInit(): void {}

  options: SortablejsOptions = {
    group: 'test',
  };
}
