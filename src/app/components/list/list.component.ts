import { Component, OnInit, Input } from '@angular/core';
import { SortablejsOptions } from 'ngx-sortablejs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  titulos: any[] = [
    { name: 'Cosas que hacer' },
    { name: ' En proceso' },
    { name: 'Finalizadas' },
  ];
  items1 = [1, 2, 3, 4, 5];
  items2 = ['a', 'b', 'c', 'd', 'e'];

  constructor() {}
  ngOnInit(): void {}

  options: SortablejsOptions = {
    group: 'test',
  };
}
