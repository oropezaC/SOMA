import { Component, OnInit } from '@angular/core';

import {lineas} from '../dommy/lineas'

@Component({
  selector: 'app-baja',
  templateUrl: './baja.component.html',
  styleUrls: ['./baja.component.css']
})
export class BajaComponent implements OnInit {
  lines:any
  constructor() { }

  ngOnInit() {
    this.getData()
  }

  getData(){
    this.lines = lineas;
  }



}
