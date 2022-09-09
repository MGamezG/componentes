import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
tamano:number=10
alert1:string='alert-info'
properties:Object={
  dangers:true
}
  constructor() { }

  ngOnInit(): void {
  }

}
