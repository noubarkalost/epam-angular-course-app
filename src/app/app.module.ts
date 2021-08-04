import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {ProvidersViewProvidersModule} from "./providers-view-providers/providers-view-providers.module";
import {ResolutionModifiersModule} from "./resolution-modifiers/resolution-modifiers.module";
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ProvidersViewProvidersModule,
    ResolutionModifiersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
