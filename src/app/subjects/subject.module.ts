import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectRouting } from './subject.routing';
import { SubjectListComponent } from './subject-list/subject-list.component';

@NgModule({
  declarations: [
    SubjectListComponent
  ],
  imports: [
    CommonModule,
    SubjectRouting
  ]
})
export class SubjectModule {}
