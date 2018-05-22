import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Route} from '@angular/router'
import {ApiService} from './api.service'

@Component({
  selector: 'messages',
  templateUrl: './feature.component.html',
  styleUrls: ['./subject.component.css']
})

export class FeatureComponent {
  subjectId: string;
  constructor(public apiService: ApiService, private activatedRoute: ActivatedRoute, private Router: Router ){
    let va = this.activatedRoute.params.subscribe(params=>{
      this.subjectId = params.id;
      
    })
    this.apiService.getTasks(this.subjectId);
    //console.log(this.apiService.tasks);
  }
}