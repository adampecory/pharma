import { Component } from '@angular/core';
import { IMedoc } from '../models/medoc';

@Component({
    selector : 'app-productlist',
    templateUrl : './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProducListComponent {
    title: string = 'Liste des médicaments';
    imgUrl: string ='assets\\images\\medoc.jpg';
    imgWidth: number = 100;
    imgShow: boolean = false;
    medocsList: IMedoc[];

    private _filteredValue: string = '';
    get filteredValue () {
        return this._filteredValue;
    }
    set filteredValue (val: string) {
        this._filteredValue=val;
        this.medocsList = this._filteredValue ? this.searchList(this._filteredValue) : this.medocs;
    }

    medocs: IMedoc[] = [
        {
            nom: 'Doliprane 500-mg',
            dateAchat: '01/01/2020',
            dateExpiration: '31/12/2020',
            estOuvert: false,
            description: 'Mots de têtes, douleurs',
            destinataire : 'Aly',
            cible: 'Enfant',
            posologie: '3fois par jour', 
            categorie: 'DOULEUR'
        },
        {
            nom: 'Efferalgan 1000',
            dateAchat: '02/01/2020',
            dateExpiration: '31/12/2021',
            estOuvert: true,
            description: 'Effervescent Most de têtes, douleurs',
            destinataire : 'Alain',
            cible: 'Adulte',
            posologie: '2 fois par jour', 
            categorie: 'DOULEUR'
        }
    ];

    constructor() {
        this.medocsList = this.medocs;
        this.filteredValue = '';
    }

    showImage(): void {
        this.imgShow = !this.imgShow;
    }

    searchList(filterBy: string): IMedoc[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.medocs.filter((elt : IMedoc) => 
            elt.nom.toLocaleLowerCase().indexOf(filterBy)!==-1 );
    }


}
