import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-element',
  templateUrl: './input-element.component.html',
  styleUrls: ['./input-element.component.scss']
})

export class InputElementComponent implements OnInit {

  @Input() label: string;
  @Input() type: string;
  @Input() name: string;
  @Input() placeholder: string;
  @Input() id: string;
  @Output() onChange = new EventEmitter<any>();
  constructor() { }

  onChangeHandler(event) {
    this.onChange.emit(event);
  }
  ngOnInit() {
  }
}
