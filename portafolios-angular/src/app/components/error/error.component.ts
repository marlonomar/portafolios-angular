import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  public mesnajeError : String;
  public image : String;
  constructor() {
    this.mesnajeError = 'Error 404 page not found...';
    this.image = 'http://66.media.tumblr.com/tumblr_mdga1cKpK51rnqolfo1_500.gif';
  }

  ngOnInit() {
  }

}
