import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { KingslakeComponent } from './kingslake/kingslake.component';
import { HillComponent } from './hill/hill.component';
import { CrestComponent } from './crest/crest.component';
import { WoodComponent } from './wood/wood.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeService } from './employee.service';


@NgModule({
  declarations: [
    AppComponent,
    KingslakeComponent,
    HillComponent,
    CrestComponent,
    WoodComponent,
    EmployeeListComponent,
    EmployeeDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
