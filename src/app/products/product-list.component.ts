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
    filteredValue: 'dol';

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

    showImage(): void {
        this.imgShow = !this.imgShow;
    }
}
