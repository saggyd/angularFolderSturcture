import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { InputElementComponent } from './component/input-element/input-element.component';
import { RouterModule } from '@angular/router';

import { OrderPipe } from './pipe/order.pipe';

@NgModule({
  declarations: [SharedComponent,
                 InputElementComponent, 
                 OrderPipe],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    InputElementComponent,
    OrderPipe
  ],
  providers: [
  ]
})
export class SharedModule { }
