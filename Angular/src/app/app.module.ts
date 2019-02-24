import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';

//service imports
import { ConstantServiceService } from './services/constant-service.service';

import { AppComponent } from "./app.component";
import { RantListComponent } from './components/rant-list/rant-list.component';
import { RantDetailsComponent } from './components/rant-details/rant-details.component';
import { HeaderComponent } from './components/header/header.component';
import { SpinnerComponent } from "./components/spinner/spinner.component";
import { LoginComponent } from './components/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";


const appRoutes: Routes = [
  {path:'rant-list', 
  component:RantListComponent,
 },
 {
   path: '',
   component: RantListComponent,
   pathMatch: 'full'
 },
 {
   path: 'rant-details/:rantId',
   component: RantDetailsComponent
 },
 {
   path: 'login',
   component: LoginComponent
 }
 
];

@NgModule({
  declarations: [AppComponent,
      RantListComponent,
      RantDetailsComponent,
      HeaderComponent,
      SpinnerComponent,
      LoginComponent],


  imports: [BrowserModule,
      HttpClientModule,
            RouterModule.forRoot(appRoutes),
      ReactiveFormsModule
           ],

  providers: [ConstantServiceService],


  bootstrap: [AppComponent],


  exports: [HeaderComponent,
            SpinnerComponent,
            LoginComponent]
})




export class AppModule {}
