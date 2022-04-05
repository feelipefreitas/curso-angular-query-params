import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent implements OnInit {

  constructor(
    private _activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    console.log('PERSON DETAILS SNAPSHOT', this._activatedRoute.snapshot.queryParams);

    this._activatedRoute.queryParams.subscribe(params => {
      console.log('PERSON DETAILS Query Params', params);
    });
  }

}
