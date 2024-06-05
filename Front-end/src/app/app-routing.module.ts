import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AppTemplateComponent} from "./app-template/app-template.component";
import {SignUpComponent} from "./signup/signup.component";
import {HomeComponent} from "./home/home.component";
import {ProduitListComponent} from "./produit-list/produit-list.component";
import {ProduitDetailComponent} from "./produit-detail/produit-detail.component";
import {ProduitEditComponent} from "./produit-edit/produit-edit.component";
import {ProduitEaddComponent} from "./produit-eadd/produit-eadd.component";
import {MostProductAddComponent} from "./most-product-add/most-product-add.component";
import {MostUsersAddProductsComponent} from "./most-users-add-products/most-users-add-products.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  {
    path: 'admin',
    component: AppTemplateComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'produits', component: ProduitListComponent },
      { path: 'produits/add', component: ProduitEaddComponent },
      { path: 'produits/:id', component: ProduitDetailComponent },
      { path: 'produits/:id/edit', component: ProduitEditComponent },
      { path: 'mostProductAdd', component: MostProductAddComponent},
      { path: 'mostUsersAddProducts', component: MostUsersAddProductsComponent},

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
