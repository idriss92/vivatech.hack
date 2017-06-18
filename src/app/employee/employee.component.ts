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
    showDialog = false;
    constructor() {
        this.employeesList = new Array<IEmployee>();
    }



    ngOnInit() {

        employees.forEach(employee => {
            employee.employee.id = Math.floor(Math.random()*10000)+1;
            employee.employee.recurring = (Math.floor(Math.random()*100)+1);
            if(+(employee.employee.recurring) > 80){
                employee.employee.criticity = "High";
            }
            else if(+(employee.employee.recurring) > 40 && +(employee.employee.recurring) <= 80 )
               {
                   employee.employee.criticity = "Medium";
            }
            else  {
                 employee.employee.criticity = "Low" 
            }
            this.employeesList.push(employee.employee);
        });
    }
}