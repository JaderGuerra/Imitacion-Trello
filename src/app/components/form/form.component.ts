import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { SortablejsOptions } from 'ngx-sortablejs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Output() enviar = new EventEmitter<any>();

  show: boolean = true;
  show2: boolean;
  tarea: string = '';
  tareas: string[] = [];

  constructor() {}

  ngOnInit(): void {}

  sendForm() {
    if (this.tarea.trim() == '') {
      alert('si');
    } else {
      this.tareas.push(this.tarea);
      this.tarea = '';
    }
  }
  options: SortablejsOptions = {
    group: 'test',
  };
}
