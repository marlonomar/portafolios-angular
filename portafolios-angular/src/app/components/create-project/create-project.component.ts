import { Component, OnInit } from '@angular/core';
import { Proyect } from '../../models/proyects';
import { ServicesProyects } from '../../services/proyects.service'; 

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss'],
  providers :[ServicesProyects]
})
export class CreateProjectComponent implements OnInit {

  public myProyect :Proyect;
  public status :string
  constructor(
    private _peticionesServices:ServicesProyects
  )
  { 
    this.myProyect = new Proyect ('','','','','','');
    
  }

  ngOnInit() {
  }

  postSubmit(){
    
    this._peticionesServices.saveProyect(this.myProyect).subscribe(res=>{
      console.log(res);
      this.status = 'success';
    },
    err=>{
      console.log(<any>err);
      this.status = 'fail';
    })

  }

}
