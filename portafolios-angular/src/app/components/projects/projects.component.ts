import { Component, OnInit } from '@angular/core';
import { ServicesProyects } from '../../services/proyects.service';
import { Proyect } from '../../models/proyects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers :[ServicesProyects]
})
export class ProjectsComponent implements OnInit {

    public proyects :Proyect[]

    constructor(
        private _peticionesServices:ServicesProyects
    ) { }

    ngOnInit() {
        this.getProyects()
    }

    getProyects(){

        this._peticionesServices.getProyects().subscribe(res=>{
                if(res.proyects){
                    this.proyects = res.proyects;
                    console.log(this.proyects)
                }   
            },
            req=>{
                console.log(<any>req)
            }

        )
    }

}
