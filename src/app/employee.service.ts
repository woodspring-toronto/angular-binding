import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { IEmployee } from './employee';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class EmployeeService {

  private employeeUrl = 'http://localhost:5832/Employee/503';

  constructor(private http: HttpClient) { }


  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(  this.employeeUrl )
        .catch( this.errorHandler);
  //  return [
  //    {'id': 1,  'name': 'Alfred', 'age': 54},
  //    {'id': 11, 'name': 'Nancy', 'age': 55},
  //    {'id': 21, 'name': 'Cindy', 'age': 24},
  //    {'id': 22, 'name': 'Daphne', 'age': 22},
  //    {'id': 31, 'name': 'John', 'age': 22}
  //   ];
  }

  errorHandler( error: HttpErrorResponse) {
    return Observable.throw( error.message || 'Server Error in EmployeeService');

  }

}
