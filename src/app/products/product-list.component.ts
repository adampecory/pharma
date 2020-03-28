import { Component } from '@angular/core';

@Component({
    selector : 'pm-productlist',
    templateUrl : './product-list.component.html'
})
export class ProducListComponent {
    title : string = "Liste des médicaments";

    medocs : any[] = [
        {
            nom:'Doliprane 500mg',
            dateAchat: '01/01/2020',
            dateExpiration: '31/12/2020',
            estOuvert: false,
            description: 'Mots de têtes, douleurs'
        },
        {
            nom:'Efferalgan 1000',
            dateAchat: '02/01/2020',
            dateExpiration: '31/12/2021',
            estOuvert: true,
            description: 'Effervescent Most de têtes, douleurs'
        }
    ]
}