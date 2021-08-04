import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  {ProvidersViewProvidersModule} from "./providers-view-providers/providers-view-providers.module";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProvidersViewProvidersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
