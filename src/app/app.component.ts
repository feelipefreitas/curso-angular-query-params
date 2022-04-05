import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IQueryParamsData } from './interfaces/query-parms-data.interface';
import { QueryParamsService } from './services/query-params.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  acc = 0;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _queryParamsService: QueryParamsService
  ) { }

  ngOnInit(): void {
    this.initializeQueryParams();
  }

  loadPeopleList() {
    this._router.navigate(['people-list'], {
      queryParams: {
        personId: this.acc += 1,
        personName: 'Joao'
      },
      queryParamsHandling: 'merge'
    });
  }

  loadPersonDetails() {
    this._router.navigate(['person-details'], {
      queryParams: {
        personAccount: 555,
        personCountry: 'Brasil'
      },
      queryParamsHandling: 'merge'
    });
  }

  private initializeQueryParams() {
    this._activatedRoute.queryParams.subscribe((queryParams) => {
      console.log('APP COMPONENT Query Params:', queryParams);
      this._queryParamsService.initializeQueryParams(queryParams as IQueryParamsData);
    });
  }
}
