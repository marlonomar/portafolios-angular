import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit {

  @Input() ancho :Number;
  @Input() url :String;
  @Input() color :String;
  @Input() alto :Number;
  @Input() radio :Number;

  @Output() getAutor = new EventEmitter();

  public autor : any;

  constructor() {
        this.autor ={
            nombre:'Marlon Guerrero',
            profesion :'Programador',
            edad: 22,
            nacionalidad:'Venezuela'
        }
  }

  ngOnInit() {
    this.foto();
  }

  foto(){

    $(".foto img").css({"width":this.ancho+'px',
                        "border":"4px solid"+this.color,
                        "height":this.alto+'px',
                        "border-radius":this.radio+'px'})
  }

  enviarAutor(event){
    this.getAutor.emit(this.autor);
  }
}
