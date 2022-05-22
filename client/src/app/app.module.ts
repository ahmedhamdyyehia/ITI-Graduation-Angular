import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeModule } from './home/home.module';
import {NgxSpinnerModule} from 'ngx-spinner'
import { LoadingInterceptor } from './core/intercepors/loading.interceptors';
import { JwtInterceptor } from './core/intercepors/JWT.interceptor';
import { ErrorInterceptor } from './core/intercepors/error.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutComponent,
    FaqComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    HomeModule,
    NgxSpinnerModule,
    ToastrModule.forRoot()
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS , useClass: LoadingInterceptor , multi:true},
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    {provide:HTTP_INTERCEPTORS , useClass: ErrorInterceptor , multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
