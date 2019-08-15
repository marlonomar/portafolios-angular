import { Component, OnInit } from '@angular/core';
import { Proyect } from '../../models/proyects';
import { ServicesProyects } from '../../services/proyects.service'; 
import { UploadService } from '../../services/upload.service';
import { apiGblobal } from '../../services/config-global';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss'],
  providers :[ServicesProyects ,UploadService]
})
export class CreateProjectComponent implements OnInit {

  public myProyect :Proyect;
  public status :string;
  public tituloPrincipal : String;
  public tituloForm : String;
  public fileToLoad : Array<File>;
  public id : string;

  constructor(
    private _peticionesServices:ServicesProyects,
    private _uploadService : UploadService
  )
  { 
    this.myProyect = new Proyect ('','','','','','','');
    this.tituloPrincipal = 'Crear un nuevo proyecto';
    this.tituloForm ='Registrar';

  }

  ngOnInit() {
  }

  postSubmit(){
    
    //guardar los datos
    this._peticionesServices.saveProyect(this.myProyect).subscribe(res=>{  
      //subir la imagen
      this._uploadService.makeFileRequest(apiGblobal.url+'uploadImage/'+res.proyect._id, [] , this.fileToLoad ,'img')
                         .then((result)=>{
                            console.log(result);
                            this.status = 'success';
                            this.id = res.proyect._id;
                         });
    },
    err=>{
      console.log(<any>err);
      this.status = 'fail';
    })

  }

  fileChangeEvent(fileInput:any){
    this.fileToLoad = <Array<File>>fileInput.target.files;
  }

}
