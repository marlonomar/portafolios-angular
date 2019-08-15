import { Component, OnInit } from '@angular/core';
import { Proyect } from '../../models/proyects';
import { ServicesProyects } from '../../services/proyects.service'; 
import { UploadService } from '../../services/upload.service';
import { apiGblobal } from '../../services/config-global';
import { Router , ActivatedRoute , Params } from '@angular/router';


@Component({
  selector: 'app-edit-proyect',
  templateUrl: './edit-proyect.component.html',
  styleUrls: ['./edit-proyect.component.scss'],
  providers :[ServicesProyects ,UploadService]
})
export class EditProyectComponent implements OnInit {

  public myProyect :Proyect;
  public status :string;
  public tituloPrincipal : String;
  public tituloForm : String;
  public fileToLoad : Array<File>;
  public id : string;
  public link: String;
  public url : String;
  

  constructor(
    private _peticionesServices:ServicesProyects,
    private _uploadService : UploadService,
    private _servicesProyects :ServicesProyects,
    private _router : Router,
    private _route : ActivatedRoute
  ) {
    this.myProyect = new Proyect ('sdaa','sadsa','sadsa','sddsa','dssa','dsdsa','dsdsa');
    this.tituloPrincipal = 'Editar Proyecto';
    this.tituloForm ='Editar';
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
        this.myProyect = response.proyects[0];
        this.link = response.proyects[0].link;
        this.id = response.proyects[0]._id;
      },
      err=>{
        console.log(err)
      }
    )
  }

  postSubmit(){
    
    //guardar los datos
    this._peticionesServices.upDateProyect(this.myProyect).subscribe(res=>{  
      if(res){
        var Id =this.id;
        if(this.fileToLoad){
          this._uploadService.makeFileRequest(apiGblobal.url+'uploadImage/'+Id, [] , this.fileToLoad ,'img')
          .then((result)=>{
             this.status = 'success';
             this.id = Id;
          });
        }else{
          this.status = 'success';
          this.id =Id;
        }
      }
    },
    err=>{
      console.log(<any>err);
      this.status = 'fail';
    })

  }

  upDateProyect(){

  }

  fileChangeEvent(fileInput:any){
    this.fileToLoad = <Array<File>>fileInput.target.files;
  }
}
