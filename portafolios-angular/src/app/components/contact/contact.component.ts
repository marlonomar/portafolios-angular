import { Component, OnInit , ViewChild} from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  public mostrar: Boolean;
  public ancho :Number;
  public alto :Number;
  public radio :Number;
  public color : String;
  public url : String;
  public datos : any;



  constructor() { }

  ngOnInit() {
    this.mostrar = false;

  }


  mostrarFoto(value){
    this.mostrar = value;
  }

  datosAutor(event){
    this.datos= event;
  }
}
