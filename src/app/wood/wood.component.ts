import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-wood',
  template: `
    <div>
      <h2> {{"HELLO " + theTree}}</h2>
      <br>
      <input #oneTree type='text'>
      <button (click)='fireEvent(oneTree)'>{{theTree}}</button>
      <h2>{{ perosn | json}} </h2>
      <h2>{{ myNumber | number: '1.5-10'}}</h2>
      <h2>{{ myNumber | number: '2.3-10'}}</h2>
      <h2>{{ myNumber | number: '7.1-3'}}</h2>
      <h2>{{ myNumber | number: '3.1-32'}}</h2>
      <h2>{{ myNumber | percent}}</h2>
      <h2>{{ myNumber | currency}}</h2>
      <h2>{{ myNumber | currency : 'GBP'}}</h2>
      <h2>{{ theDate}}</h2>
      <h2>{{ theDate | date:'short'}}</h2>
      <h2>{{ theDate | date:'shortDate'}}</h2>
      <h2>{{ theDate | date:'shortTime'}}</h2>
    </div>
  `,
  styles: []
})
export class WoodComponent implements OnInit {

  @Input('oneParentData') public theTree;
  @Output() public woodEvent = new EventEmitter();

  public perosn = {
    'firstname': 'ALFRED',
    'lastname': 'HUANG'
  };

  public myNumber = 3.7875928252679;

  public theDate = new Date();

  constructor() { }

  ngOnInit() {
  }

  fireEvent( item) {
    console.log('==app-wood=>' + item.value);
    this.theTree = item.value;
    this.woodEvent.emit( this.theTree);
  }

}
