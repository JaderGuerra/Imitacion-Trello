import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css'],
})
export class TareaComponent implements OnInit {
  @Input() tarea: string;
  @Output() delete: EventEmitter<string> = new EventEmitter();

  show: boolean = false;
  constructor() {}
  ngOnInit(): void {}

  borrar() {
    this.delete.emit(this.tarea);
  }
}
