import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { ProductModule } from './products/product.module';
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    ProductModule,
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
