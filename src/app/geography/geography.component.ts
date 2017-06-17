import { Component, OnInit, Input, Output } from '@angular/core';
import { SafeResourceUrl, DomSanitizer, Title } from '@angular/platform-browser';
import { ICity } from '../models/cities-model';
import cities from './cities';

@Component({
    selector: 'geography',
    templateUrl: './geography.component.html',
    styleUrls: ['./geography.component.css']
})
export class GeographyComponent   {
    citiesList: ICity[];
    constructor() {
        this.citiesList = new Array<ICity>();
    }

    ngOnInit() {
        cities.forEach(city => {
            console.log(city);
            this.citiesList.push(city);
        });
    }

}