import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResolutionModifiersComponent } from './resolution-modifiers.component';
import { HostComponent } from './host/host.component';
import { HostChildComponent } from './host-child/host-child.component';
import { HostParentComponent } from './host-parent/host-parent.component';
import { OptionalComponent } from './optional/optional.component';
import { SelfComponent } from './self/self.component';
import { SelfNoDataComponent } from './self-no-data/self-no-data.component';
import { SkipSelfComponent } from './skip-self/skip-self.component';



@NgModule({
  declarations: [
    ResolutionModifiersComponent,
    HostComponent,
    HostChildComponent,
    HostParentComponent,
    OptionalComponent,
    SelfComponent,
    SelfNoDataComponent,
    SkipSelfComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ResolutionModifiersModule { }
