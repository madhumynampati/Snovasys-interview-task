import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router,ActivatedRoute} from "@angular/router";

import * as _ from 'lodash';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  allAssets:any=[];
  damagedAssets:any=[];
  assetsAssignedToMe:any=[];
  username:string;
  constructor(private http: HttpClient,private router: Router) {
    this.username=localStorage.getItem('snovasys');
    this.getAssets();
  }
  getAssets(){
    this.http.get('../../assets/assets.json').subscribe(res=>{
      this.allAssets=res['data'];
      const base=this;
      this.damagedAssets=_.filter(this.allAssets, function(asset){ return asset.damaged == true; });
      this.assetsAssignedToMe=_.filter(this.allAssets, function(asset){ return asset.assignedTo == base.username; });
      // debugger
    },err=>{

    })
  }
  addAsset(){
    this.router.navigate(['addEditAsset',0]); 
  }
  goallAssets(){
    this.router.navigate(['listAssets']); 
  }
  ngOnInit() {
    
  }

}
