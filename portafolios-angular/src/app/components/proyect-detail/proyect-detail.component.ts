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
  public link: String;
  public id : String;
  public comfirmar : Boolean;
  constructor(
    private _servicesProyects :ServicesProyects,
    private _router : Router,
    private _route : ActivatedRoute
  ) {
    this.url = apiGblobal.url;
    this.comfirmar = false;
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
        this.link = response.proyects[0].link;
        this.id = response.proyects[0]._id;
        document.querySelector('iframe').setAttribute('src',this.link = response.proyects[0].link);
      },
      err=>{
        console.log(err)
      }
    )
  }

  deleteProyect(id){
    this._servicesProyects.deleteProyect(id).subscribe(
      response=>{
          if(response){
            this._router.navigate(['proyectos']);
          }
      },
      err=>{
        console.log(<any>err)
      }
    )
  }

  comfirmDelete(value){
    this.comfirmar = value;
  }

}
