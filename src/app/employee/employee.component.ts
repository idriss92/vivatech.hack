import { Component, OnInit, Input, Output } from '@angular/core';
import { SafeResourceUrl, DomSanitizer, Title } from '@angular/platform-browser';
import employees from './employee';
import { IEmployee } from '../models/employee.model';

@Component({
    selector: 'employee',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css']
})
export class EmployeeComponent   {
    employeesList: IEmployee [];

    constructor() {
        this.employeesList = new Array<IEmployee>()
    }

    ngOnInit() {
        employees.forEach(employee => {
            console.log(employee.employee);
            this.employeesList.push(employee.employee);
        });
    }

}