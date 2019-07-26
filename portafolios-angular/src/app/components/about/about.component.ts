import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  
  public titulo : String;
  public subTitulo : String;
  public email : String;
  public aboutTitulo : String;
  public aboutContenido : String

  constructor() {
    this.titulo = 'MARLON GUERRERO';
    this.subTitulo = 'Desarrollador Web Front End';
    this.email = 'mog2646@gmail.com';
    this.aboutTitulo = 'Sobre Mi';
    this.aboutContenido = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, facere nesciunt! Dicta consequuntur, quod eos odio officiis fuga? Quos nesciunt quo recusandae impedit rem voluptatibus quibusdam corrupti beatae earum repellat?';
  }

  ngOnInit() {
  }

}
