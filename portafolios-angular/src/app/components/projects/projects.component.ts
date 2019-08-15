import { Component, OnInit } from '@angular/core';
import { ServicesProyects } from '../../services/proyects.service';
import { Proyect } from '../../models/proyects';
import { apiGblobal } from '../../services/config-global';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers :[ServicesProyects]
})
export class ProjectsComponent implements OnInit {

    public proyects :Proyect[];
    public url : string;

    constructor(
        private _peticionesServices:ServicesProyects
    ) { 
        this.url = apiGblobal.url;
    }

    ngOnInit() {
        this.getProyects()
    }

    getProyects(){

        this._peticionesServices.getProyects().subscribe(res=>{
                if(res.proyects){
                    this.proyects = res.proyects;
                }   
            },
            req=>{
                console.log(<any>req)
            }

        )
    }

}
