import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalizationRouting } from './localization.routing';
import { LocalizationListComponent } from './localization-list/localization-list.component';

@NgModule({
  declarations: [
    LocalizationListComponent
  ],
  imports: [
    CommonModule,
    LocalizationRouting
  ]
})
export class LocalizationModule {}
