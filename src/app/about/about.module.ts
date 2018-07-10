import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule
  ],
  declarations: [ContactComponent]
})
export class AboutModule { }
