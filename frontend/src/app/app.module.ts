import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';
import {MatButtonModule, MatCardModule, MatToolbarModule, MatListModule} from '@angular/material';

import { AppComponent } from './app.component';
import {ApiService} from './api.service'
import {MessagesComponent} from './messages.component'
import {SubjectComponent} from './subject.component'
import {FeatureComponent} from './feature.component'

const routes= [
  {path: 'subjects', component: SubjectComponent},
  {path: 'feature/:id', component: FeatureComponent},
  
]

@NgModule({
  declarations: [
    AppComponent, MessagesComponent, SubjectComponent, FeatureComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    RouterModule.forRoot(routes),
    MatListModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
