import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-crest',
  template: `
  <div [ngSwitch]='color'>
    <div *ngSwitchCase="'red'">It is RED {{color}}</div>
    <div *ngSwitchCase="'yellow'">It is YELLOW {{color}}</div>
    <div *ngSwitchCase="'green'">It is GREEN {{color}}</div>
    <div *ngSwitchCase="'blue'">It is BLUE {{color}}</div>
    <div *ngSwitchDefault> It is color I don't know. {{color}} </div>
  </div>
  <div *ngIf="isDisplay; then thenBlock; else elseBlock"></div>
    <ng-template #thenBlock>
      <h2> Welcoome---- {{name}} --------------</h2>
      <input [(ngModel)]='name' type='text'>
      {{name}}
    </ng-template>

    <ng-template #elseBlock>
      <h2> Which city is the best? ==== {{city}} =====</h2>
      <input [(ngModel)]='city' type='text'>
      {{city}}
    </ng-template>
  <input #whichDisplay type='text'>
  <div *ngFor="let theNumber of myNumbers; index as ind" >
    <h2>{{ind}} = {{theNumber}} == {{color}}</h2>
  </div>
  <button (click)="onDisplay(whichDisplay)">{{city}}</button>
    <br>
  <input #theColor type='text'>
  <button (click)="onColor(theColor)">{{color}}</button>

      `,
  styles: []
})
export class CrestComponent implements OnInit {

  public name = 'ALFRED';
  public city = 'LONDON';
  public color = 'green';
  public myNumbers = [ '10', '20', '30', '40', '50', '60'];
  public isDisplay = false;
  constructor() { }

  ngOnInit() {
  }

  onDisplay( item) {
    console.log( item.value);
    this.isDisplay = this.isDisplay ? false : true;
    if ( this.isDisplay) {
      this.name = item.value;
    } else {
        this.city = item.value;
    }
  }

  onColor( item) {
    this.color = item.value;
  }

}
