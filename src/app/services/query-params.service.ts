import { Injectable } from "@angular/core";
import { IQueryParamsData } from "../interfaces/query-parms-data.interface";

@Injectable({
    providedIn: 'root'
})
export class QueryParamsService {
    private queryParams: IQueryParamsData = {} as IQueryParamsData;

    initializeQueryParams(queryParamsFromUrl: IQueryParamsData) {
        this.queryParams = {
            func: queryParamsFromUrl.func,
            id: queryParamsFromUrl.id,
            teste: queryParamsFromUrl.teste
        }
    }

    returnQueryParmsObj(): IQueryParamsData {
        return this.queryParams;
    }
}