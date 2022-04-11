import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule }    from '@angular/common/http';  
import {ServiceService} from './service.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateComponent } from './Employee/create/create.component';  
import { Router, RouterModule } from '@angular/router';
import { routes } from './route';
import { ServicesService } from './Employee/services.service';
import { PagenotfoundComponentComponent } from './pagenotfound-component/pagenotfound-component.component';

@NgModule({  
  declarations: [  
    AppComponent, CreateComponent, PagenotfoundComponentComponent  
  ],  
  imports: [  
    BrowserModule,  
    FormsModule,  
    ReactiveFormsModule,
    RouterModule.forRoot(routes),  //https://stackoverflow.com/questions/46108581/no-provider-for-childrenoutletcontexts-injectionerror
    HttpClientModule, NgbModule 
    
  
  ],  
  providers: [{provide:ServicesService}],
  bootstrap: [AppComponent]  
})  
export class AppModule { } 
