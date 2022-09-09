import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private activatedRuter:ActivatedRoute) {
    activatedRuter.params.subscribe(
      (params:Params)=>{
        console.log('padre')
        console.log(params)
      }
    )
   }

  ngOnInit(): void {
  }

}
