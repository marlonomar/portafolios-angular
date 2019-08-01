import { Component, OnInit } from '@angular/core';
import { ServicesProyects } from '../../services/proyects.service';
import { Proyect } from '../../models/proyects';
import { apiGblobal } from '../../services/config-global';
import { Router , ActivatedRoute , Params } from '@angular/router';

@Component({
  selector: 'app-proyect-detail',
  templateUrl: './proyect-detail.component.html',
  styleUrls: ['./proyect-detail.component.scss'],
  providers:[ServicesProyects]
})
export class ProyectDetailComponent implements OnInit {
  public url : String;
  public proyect : Proyect;
  constructor(
    private _servicesProyects :ServicesProyects,
    private _router : Router,
    private _route : ActivatedRoute
  ) {
    this.url = apiGblobal.url;
  }

  ngOnInit() {
    this._route.params.subscribe(params=>{
        let id = params.id;
        this.getProyect(id);
    })
  }

  getProyect(id){
    this._servicesProyects.getProyect(id).subscribe(
      response=>{
        this.proyect = response.proyects[0];
        console.log(this.proyect.name)
      },
      err=>{
        console.log(err)
      }
    )
  }

}
