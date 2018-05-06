import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router,ActivatedRoute} from "@angular/router";

import * as _ from 'lodash';

@Component({
  selector: 'app-add-edit-assets',
  templateUrl: './add-edit-assets.component.html',
  styleUrls: ['./add-edit-assets.component.css']
})
export class AddEditAssetsComponent implements OnInit {
  asset:any={
    "id":"",
    "assteName":"",
    "assignedTo":"",
    "assignedDate":"",
    "damaged":null,
    "damagedDate":null,
    "purchasedDate":"",
    "cost":""
};
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
      if(this.asset.length>0){
        this.asset=this.asset[0];
        base.viewAsset=true;
      }else{
        base.viewAsset=false;
      }
      
      if(this.asset.id==""){

      }

    },err=>{

    })
  }
  updateAsset(){
    this.router.navigate(['listAssets']);  
  }
  ngOnInit() {
  }

}
