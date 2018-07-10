import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriptionRoutingModule } from './subscription-routing.module';
import { SubscriberComponent } from './subscriber/subscriber.component';

@NgModule({
  imports: [
    CommonModule,
    SubscriptionRoutingModule
  ],
  declarations: [SubscriberComponent]
})
export class SubscriptionModule { }
