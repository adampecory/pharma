import { Injectable } from "@angular/core";
import { IMedoc } from '../models/medoc';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, tap } from "rxjs/operators";
@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor(private http:HttpClient){}
    //private url = 'assets/api/medocs.json';
    //private url = 'http://localhost:62914/api/medicament';
    private url = 'http://localhost/pharmaws/api/medicament';
    
    getMedocs(): Observable<IMedoc[]> {
        console.log(this.http.get<IMedoc[]>(this.url));
        return this.http.get<IMedoc[]>(this.url).pipe(
            tap(data=>console.log('all: '+ JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    AddMedoc(product: IMedoc): Observable<any> {
        return this.http.post("https://putsreq.com/UfxxSisniitYCn01sQaf",product);
    }

    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return throwError(err.message);
    }
}