import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detail',
  template: `
    <h2>Employee Detail</h2>
    <h3>{{errorMsg}}</h3>
    <ul *ngFor="let employee of employees; index as ind">
      <li>{{ind}}: {{ employee.id }} ->{{employee.name}} {{employee.age}}   {{ind}}</li>
  `,
  styles: []
})
export class EmployeeDetailComponent implements OnInit {

  public employees = [];
  public errorMsg;
  //  {'id': 1,  'name': 'Alfred', 'age': 54},
  //  {'id': 11, 'name': 'Nancy', 'age': 55},
  //  {'id': 21, 'name': 'Cindy', 'age': 24},
  // {'id': 22, 'name': 'Daphne', 'age': 22},
  //  {'id': 31, 'name': 'John', 'age': 22}
  // ];


  constructor(private _employeeService: EmployeeService ) { }

  ngOnInit() {
    this._employeeService.getEmployees()
          .subscribe(data => this.employees = data,
                     error => this.errorMsg = error);
  }

}
