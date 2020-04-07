import { Component, OnInit } from '@angular/core';
import { IMedoc } from '../models/medoc';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../products/product.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  postErrorMessage: string = '';
  postError: boolean = false;
  originalMedoc : IMedoc ;
  medoc: IMedoc = {
    nom: '',
    categorie: '',
    cible: '',
    dateAchat: '',
    dateExpiration: '', description:'', destinataire:'', 
    estOuvert: false, 
    id:0,
    note:0,
    posologie: '', dateOuverture:''
  }
  
  constructor(private productService: ProductService) {}
  
  onHttpError(errorResponse: any) {
    console.log('error :',errorResponse);
    this.postError = true;
    this.postErrorMessage = errorResponse.error.errorMessage
  }

  onClick(form: NgForm) {
    console.log(form.valid)
    if (!form.valid) return;
    
    console.log('Ajouter medicament');
    this.productService.AddMedoc(this.medoc).subscribe({
      next : data => console.log(data),
      error : err => this.onHttpError(err)
    });
    form.resetForm();
  }

  ngOnInit(): void {
  }

}
