import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  constructor(
    private _activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe(params => {
      console.log('PEOPLE LIST Query Params', params)
    });
  }

}
