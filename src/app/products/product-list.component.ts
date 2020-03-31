import { Component, OnInit } from '@angular/core';
import { IMedoc } from '../models/medoc';
import { ProductService } from './product.service';

@Component({
    selector : 'app-productlist',
    templateUrl : './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProducListComponent implements OnInit {



    title: string = 'Liste des médicaments';
    imgUrl: string ='assets\\images\\medoc.jpg';
    imgWidth: number = 100;
    imgShow: boolean = false;
    medocs: IMedoc[] = [];
    medocsList: IMedoc[];

    private _filteredValue: string = '';
    get filteredValue () {
        return this._filteredValue;
    }
    set filteredValue (val: string) {
        this._filteredValue=val;
        this.medocsList = this._filteredValue ? this.searchList(this._filteredValue) : this.medocs;
    }


    constructor(private productService: ProductService) {
    }

    showImage(): void {
        this.imgShow = !this.imgShow;
    }

    searchList(filterBy: string): IMedoc[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.medocs.filter((elt : IMedoc) => 
            elt.nom.toLocaleLowerCase().indexOf(filterBy)!==-1 );
    }

    onRatingClick(msg: string): void {
        this.title = "Liste des Mediacaments " + msg;
        console.log(event);
    }

    ngOnInit(): void {
        this.medocs = this.productService.getModocs();
        this.medocsList = this.medocs;
    }

}
