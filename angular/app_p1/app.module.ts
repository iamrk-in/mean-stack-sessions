import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TemplateFormValidationComponent } from './template-form-validation/template-form-validation.component';
import { FileUploadPreviewComponent } from './file-upload-preview/file-upload-preview.component';
import { UnderstandPipesComponent } from './understand-pipes/understand-pipes.component';
import { CapitalizePipe } from './understand-pipes/capitalize.pipe';
import { CrudOperationsUserComponent } from './crud-operations-user/crud-operations-user.component';
import { CrudOperationsUserService } from './crud-operations-user/crud-operations-user.service';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { RoundBlockDirective } from './directives/round-block.directive';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { AccountComponent } from './dependency-injection/account/account.component';
import { NewAccountComponent } from './dependency-injection/new-account/new-account.component';
import { ObservablesRestapiComponent } from './observables-restapi/observables-restapi.component';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    ProductsComponent,
    ProductDetailComponent,
    ContactUsComponent,
    PageNotFoundComponent,
    TemplateFormValidationComponent,
    FileUploadPreviewComponent,
    UnderstandPipesComponent, 
    CapitalizePipe, 
    CrudOperationsUserComponent, 
    CustomDirectiveComponent, 
    RoundBlockDirective, 
    DependencyInjectionComponent, 
    AccountComponent, 
    NewAccountComponent, 
    ObservablesRestapiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    ReactiveFormsModule, 
    HttpClientModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es'}, 
    CrudOperationsUserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
