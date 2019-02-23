import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from "./app.component";
import { RantListComponent } from './components/rant-list/rant-list.component';
import { RantDetailsComponent } from './components/rant-details/rant-details.component';


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
   path: 'rant-details',
   component: RantDetailsComponent
 }
];




@NgModule({
  declarations: [AppComponent, RantListComponent, RantDetailsComponent],
  imports: [BrowserModule,
            RouterModule.forRoot(appRoutes)
           ],
  providers: [],
  bootstrap: [AppComponent]
})




export class AppModule {}
