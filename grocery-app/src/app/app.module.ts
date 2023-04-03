import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FrontModule } from './front/front.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FrontModule } from './modules/front/front.module';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { LayoutComponent } from './layouts/layout/layout.component';
import { HomeComponent } from './layouts/home/home.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ExploreCategoryComponent } from './shared/explore-category/explore-category.component';
import { FeaturedProductsComponent } from './shared/featured-products/featured-products.component';
import { OtherDataComponent } from './shared/other-data/other-data.component';
import { TokenInterceptor } from './shared/interceptor/token.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    LayoutComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ExploreCategoryComponent,
    FeaturedProductsComponent,
    OtherDataComponent


   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   ReactiveFormsModule,
    HttpClientModule,
    FrontModule,
    IvyCarouselModule
  
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptor,
    multi:true,
}],
  bootstrap: [AppComponent]
})
export class AppModule { }
