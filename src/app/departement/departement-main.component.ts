import { Component, OnInit, Input, Output } from '@angular/core';
import { SafeResourceUrl, DomSanitizer, Title } from '@angular/platform-browser';
import { IDepartement } from '../models/departement-model';
import employees from '../employee/employee';

@Component({
    selector: 'departement-main',
    templateUrl: './departement-main.component.html',
    styleUrls: ['./departement-main.component.css']
})
export class DepartementComponent   {
     departementsList: any[];//IDepartement []
     constructor() {
         this.departementsList = [];//new Array<IDepartement>();
     }
    ngOnInit() {
        employees.forEach( employee => {
            if( !this.departementsList.includes(employee.employee.department)) {
                this.departementsList.push(employee.employee.department);
            }
        })
    }

}