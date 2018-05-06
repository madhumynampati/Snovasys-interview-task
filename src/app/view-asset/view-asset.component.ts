import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router,ActivatedRoute} from "@angular/router";
// import {Router} from "@angular/router";

import * as _ from 'lodash';

@Component({
  selector: 'app-view-asset',
  templateUrl: './view-asset.component.html',
  styleUrls: ['./view-asset.component.css']
})
export class ViewAssetComponent implements OnInit {
  asset:any;
  id:any;
  viewAsset:boolean=false;
  constructor(private http: HttpClient,private route: ActivatedRoute,private router: Router) {
    this.route.params.subscribe( params => this.id=params.id );
    this.getAssets();
  }
  getAssets(){
    this.http.get('../../assets/assets.json').subscribe(res=>{
      const base=this;
      this.asset=_.filter(res['data'], function(asset){ return asset.id == parseInt(base.id); });
      this.asset=this.asset[0];
      base.viewAsset=true;

    },err=>{

    })
  }
  deleteAsset(){
    this.router.navigate(['listAssets']); 
  }
  updateAsset(){
    this.router.navigate(['addEditAsset',this.asset.id]); 
  }
  ngOnInit() {
  }

}
