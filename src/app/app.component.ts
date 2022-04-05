import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IQueryParamsData } from './interfaces/query-parms-data.interface';
import { QueryParamsService } from './services/query-params.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _queryParamsService: QueryParamsService
  ) { }

  ngOnInit(): void {
    this.initializeQueryParams();

    setTimeout(() => {
      console.log('query params obj', this._queryParamsService.returnQueryParmsObj());
    }, 3000);
  }

  private initializeQueryParams() {
    this._activatedRoute.queryParams.subscribe((queryParams) => {
      console.log('queryParams', queryParams);
      this._queryParamsService.initializeQueryParams(queryParams as IQueryParamsData);
    });
  }
}
