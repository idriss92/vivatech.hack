import { ContactDataService } from './services/contact-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { GlobalAppinessComponent } from './global-appiness/global-appiness.component';
import { LineChartDemoComponent } from './departement/departement-main.component';
import { GeographyComponent } from './geography/geography.component';
import { BuildingComponent } from './bulding/building.component';
import { EmployeeComponent } from './employee/employee.component';
import { DialogComponent } from './dialog/dialog.component';
import { EmotionDetectionComponent } from './emotion-detection/emotion-detection.component';
import { EmotionDetectionVideoComponent } from './emotion-detection-video/emotion-detection-video.component';
import 'rxjs/add/operator/toPromise';
import * as $ from "jquery";
import { AgmCoreModule } from '@agm/core';
import  * as ng2Bootstrap from 'ng2-bootstrap';
import { DataService } from "./services/data.service";
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import { ChartsModule } from 'ng2-charts';
import { EmotionDataService } from "./services/emotion-data.service";
import { CognitiveApiService } from "app/services/cognitive-api.service";
import { HeroBannerComponent } from './directives/hero-banner.component';
import { OutputSectionComponent } from './directives/output-section.component';
import { ApiDetailsHeaderComponent } from './directives/api-details-header.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    EmotionDetectionComponent,
    EmotionDetectionVideoComponent,
    HeroBannerComponent,
    OutputSectionComponent,
    ApiDetailsHeaderComponent,
//    DepartementComponent,
    GlobalAppinessComponent,
    GeographyComponent,
    BuildingComponent,
    EmployeeComponent,
    DialogComponent,
    DialogComponent,
    LineChartDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    ng2Bootstrap.Ng2BootstrapModule,
    ChartsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDxYxkrm_Ce4vB1anAC5aJX-wBcmxbXxGc'
    })
  ],
  providers: [DataService,
              EmotionDataService,
              CognitiveApiService,
              ContactDataService,
              ng2Bootstrap.ComponentLoaderFactory,
              ng2Bootstrap.PositioningService],
  bootstrap: [AppComponent]
})
export class AppModule { }
