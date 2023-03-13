import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FrontModule } from './front/front.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,


   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FrontModule,
    CoreModule,
    ReactiveFormsModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
