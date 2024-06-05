import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomeComponent } from './home/home.component';
import { AppTemplateComponent } from './app-template/app-template.component';
import {MatToolbar, MatToolbarModule} from "@angular/material/toolbar";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatMenu, MatMenuModule, MatMenuTrigger} from "@angular/material/menu";
import {MatDrawerContainer, MatSidenavModule} from "@angular/material/sidenav";
import {MatList, MatListItem, MatListModule} from "@angular/material/list";
import {MatButton, MatButtonModule, MatIconButton} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";
import { SignUpComponent } from './signup/signup.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { LoginComponent } from './login/login.component';
import { ProduitListComponent } from './produit-list/produit-list.component';
import { ProduitDetailComponent } from './produit-detail/produit-detail.component';
import { ProduitEditComponent } from './produit-edit/produit-edit.component';
import { ProduitEaddComponent } from './produit-eadd/produit-eadd.component';
import {MatDividerModule} from "@angular/material/divider";
import { MostUsersAddProductsComponent } from './most-users-add-products/most-users-add-products.component';
import { MostProductAddComponent } from './most-product-add/most-product-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppTemplateComponent,
    SignUpComponent,
    LoginComponent,
    ProduitListComponent,
    ProduitDetailComponent,
    ProduitEditComponent,
    ProduitEaddComponent,
    MostUsersAddProductsComponent,
    MostProductAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbar,
    MatIcon,
    MatMenuTrigger,
    MatDrawerContainer,
    MatListModule,
    MatListItem,
    MatButton,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatSidenavModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,







  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
