import { Injectable } from "@angular/core";
import { IMedoc } from '../models/medoc';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    getModocs(): IMedoc[] {
        return [
            {
                nom: 'Doliprane 500-mg',
                dateAchat: '01/01/2020',
                dateExpiration: '02/01/2020',
                estOuvert: false,
                description: 'Mots de têtes, douleurs',
                destinataire : 'Aly',
                cible: 'Enfant',
                posologie: '3fois par jour', 
                categorie: 'DOULEUR',
                note: 3
            },
            {
                nom: 'Efferalgan 1000',
                dateAchat: '02/01/2020',
                dateExpiration: '02/01/2021',
                estOuvert: true,
                description: 'Effervescent Most de têtes, douleurs',
                destinataire : 'Alain',
                cible: 'Adulte',
                posologie: '2 fois par jour', 
                categorie: 'DOULEUR',
                note : 4
            },
            {
                nom: 'Cerulyse',
                dateAchat: '01/01/2020',
                dateExpiration: '02/01/2020',
                estOuvert: false,
                description: 'Bouchon de cerumen',
                destinataire : 'Malick',
                cible: 'Tous',
                posologie: '1 fois par jour', 
                categorie: 'ORL',
                note: 3
            },
            {
                nom: 'Dapan',
                dateAchat: '02/01/2020',
                dateExpiration: '02/01/2021',
                estOuvert: true,
                description: 'Mots de ventre',
                destinataire : 'Noura',
                cible: 'Adulte',
                posologie: '2 fois par jour', 
                categorie: 'DOULEUR',
                note : 4
            }
        ]
    }
}