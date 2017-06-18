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
  // google maps zoom level
  zoom: number = 8;
  lat: number = 48.910063;
  lng: number = 2.395227;
    citiesList: ICity[];
    constructor() {
        this.citiesList = new Array<ICity>();
    }

    ngOnInit() {
        cities.forEach(city => {
            console.log(city.lat + " and " + city.long);
            this.citiesList.push(city);
        });
        console.log(this.citiesList);
    }

    clickedMarker(label: string, message : string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
    confirm(message);
  }
}