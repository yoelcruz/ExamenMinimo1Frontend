import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  public title: string;
  public identity;

  constructor(){
    this.title = 'CLIENTE MÍNIMO 1';
  }

  ngOnInit(){
    /* this.identity = this._userService.getIdentity(); */
  }
}
