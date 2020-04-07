import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { IMedoc } from '../models/medoc';

@Component({    
    templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {

    constructor(private route: ActivatedRoute,
        private router: Router) {}
    product: IMedoc;
    ngOnInit(): void {
        let id= +this.route.snapshot.paramMap.get('id');
        console.log(id);
        this.product = {
            "id": id,
            "nom": "Dapan",
            "dateAchat": "02/01/2020",
            "dateExpiration": "02/01/2021",
            "estOuvert": true,
            "description": "Mots de ventre",
            "destinataire": "Noura",
            "cible": "Adulte",
            "posologie": "2 fois par jour", 
            "categorie": "DOULEUR",
            "note": 4,
            "dateOuverture":""
        }
    }

    onBack() {
        this.router.navigate(['/medocs']);
    }
}