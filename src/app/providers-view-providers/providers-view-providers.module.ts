import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child/child.component';
import { InspectorComponent } from './inspector/inspector.component';



@NgModule({
  declarations: [
    ChildComponent,
    InspectorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProvidersViewProvidersModule { }
