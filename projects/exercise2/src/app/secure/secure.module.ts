import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecureModuleRoutingModule } from './secure-routing.module';
import { SecureComponent } from './secure.component';


@NgModule({
  declarations: [
    SecureComponent
  ],
  imports: [
    CommonModule,
    SecureModuleRoutingModule
  ]
})
export class SecureModuleModule { }
