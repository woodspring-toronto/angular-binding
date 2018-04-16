import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kingslake',
  template: `
    <h2> Welcome {{name}}
    </h2>
    <h2> {{ "HELLO , it is "+ name}}</h2>
    <h2> {{ name.length}}<h2>
    <h2>{{ name.toUpperCase()}}</h2>
    <h2>{{greeting()}}</h2>
    <h2>{{siteUrl}}</h2>
    `,
    styles: [`
    div {
      color: red
    }`]
})
export class KingslakeComponent implements OnInit {
  public name = 'Taipei , Taiwan, Republic Of China';
  public siteUrl = window.location.href;
  constructor() { }

  ngOnInit() {
  }

  greeting() {
    return '-->I came from ' + this.name;
  }

}
