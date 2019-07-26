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
  public status :string;
  public tituloPrincipal : String;
  public mensajeFail : String;
  public mensajeSuccess : String;
  public tituloForm : String;
  public sugerencias : String;
  constructor(
    private _peticionesServices:ServicesProyects,
    
  )
  { 
    this.myProyect = new Proyect ('','','','','','');
    this.tituloPrincipal = 'Crear un nuevo proyecto';
    this.mensajeSuccess = 'El proyecto {{myProyect.name}} se a guardado correctamente ';
    this.mensajeFail = 'El proyecto no pudo ser guardado';
    this.tituloForm ='Registrar';
    this.sugerencias = 'los datos sugeridos son necesarios para enviar';
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
