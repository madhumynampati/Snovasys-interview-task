import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-assets',
  templateUrl: './list-assets.component.html',
  styleUrls: ['./list-assets.component.css']
})
export class ListAssetsComponent implements OnInit {
  allAssets:any=[];
  constructor(private http: HttpClient,private router: Router) { 
    this.getAssets();
  }

  ngOnInit() {
  }
  getAssets(){
    this.http.get('../../assets/assets.json').subscribe(res=>{
      this.allAssets=res['data'];
      
    },err=>{

    })
  }
  viewAsset(asset){
    const link = ['viewAsset'];
    this.router.navigate(['viewAsset',asset.id]); 
  }

}
