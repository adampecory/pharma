import { Injectable } from "@angular/core";
import { IMedoc } from '../models/medoc';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from "rxjs/operators";
@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private http:HttpClient){}
    private url = 'assets/api/product.json';

    getMedocs(): Observable<IMedoc[]> {
        return this.http.get<IMedoc[]>(this.url).pipe(
            tap(data=>console.log('all: '+ JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return throwError(err.message);
    }
}