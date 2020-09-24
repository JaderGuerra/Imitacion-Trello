import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  titulos: any[] = [
    { name: 'Tareas' },
    { name: 'En proceso' },
    { name: 'Finalizadas' },
  ];

  items: any[] = [
    { name: 'aaa' },
    { name: 'bbb' },
    { name: 'ccc' },
    { name: 'ff' },
    { name: 'hhy' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
