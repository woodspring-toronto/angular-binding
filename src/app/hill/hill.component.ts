import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hill',
  template: `
  <h2 class='text-sucess'>{{name}}</h2>
  <input [(ngModel)]='name' type='text'>
  {{name}}           TWO-WAY BINDING
  <input #theInput type='text'>
  <button (click)="displayMessage(theInput)">LOG</button>
  <button (click)="onClick($event)">Greeting......</button>
  <h2 [ngClass]='messageClass'>{{name | lowercase }}</h2>
  <h2 [style.color]="hasError ? 'red' : 'green'">Style BINGING => {{name}}</h2>
  <h2 [style.color]='highlineColor'> WONDERFUL Style BINGING => {{name | titlecase}}</h2>
  <h2 [ngStyle]='titleStyle'> EXCELLENT Style BINGING => {{name | uppercase}}</h2>
  <input [id]='myId' type='text' value='ALFRED'>
  <input bind-disabled='isDisabled' id={{myId}} type='text' value='NANCY'>
  `,
  styles: [`
    .text-sucess {
      color: green;
    }
    .text-danger {
      color: red;
    }
    .text-special {
      font-style: italic;
    }
  `]
})
export class HillComponent implements OnInit {
  public name = 'Robert';
  public myId = 'finch';
  public isDisabled = true;
  public classSucess = 'text-sucess';
  public hasError = false;
  public isSpecial = false;
  public highlineColor = 'orange';

  public messageClass = {
    'text-sucess': !this.hasError,
    'text-danger': this.hasError,
    'text-special': this.isSpecial
  };

  public titleStyle = {
    color: 'blue',
    fontStyle: 'italic'
  };
  constructor() { }

  ngOnInit() {
  }

  onClick(event) {
    console.log('WELCOME !!! We Are Here!!');
    console.log(event);
    this.name = 'OH CANADA, MY HOME , ======';
    this.hasError = true;
    this.isSpecial = true;
    this.isDisabled = false;
  }

  displayMessage(item) {
    console.log('Display Message from LOG:');
    console.log(item.value);
    this.name = item.value + ', MY HOME , ======';
    this.hasError = false;
    this.isSpecial = false;
    this.isDisabled = true;

  }
}
