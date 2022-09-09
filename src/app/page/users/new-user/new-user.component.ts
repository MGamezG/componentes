import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  constructor(private activatedRuter:ActivatedRoute) {
   this.activatedRuter.parent?.params.subscribe(
      (params:Params)=>{
        console.log('hija')
        console.log(params)
      }
    )
   }

  ngOnInit(): void {
  }

}
