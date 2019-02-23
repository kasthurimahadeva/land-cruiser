import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { RantListComponent } from './components/rant-list/rant-list.component';
import { RantDetailsComponent } from './components/rant-details/rant-details.component';

@NgModule({
  declarations: [AppComponent, RantListComponent, RantDetailsComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
