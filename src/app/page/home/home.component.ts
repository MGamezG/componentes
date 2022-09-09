import { Component, OnInit, OnChanges,DoCheck,AfterContentInit,
AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnChanges,DoCheck,AfterContentInit,
AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
tamano:number=10
alert1:string='alert-info'
alert2:string='warning'
properties:Object={
  dangers:true
}
loading:boolean=false
  constructor() {
    console.log('constructor')
  }

  ngOnInit(): void {
    console.log('ngOnInit')
  }
  ngOnChanges(){
    console.log('ngOnChanges')
  }
  ngDoCheck(){
    console.log('ngDoCheck')
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit')
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked')
  }
  ngAfterViewInit(){
    console.log('ngAfterViewInit')
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked')
  }
  ngOnDestroy(){
    console.log('ngOnDestroy')
  }


  ejecutar(){
    this.loading=true

    setTimeout(()=>this.loading=false,3000)
  }

}
