import { Routes, RouterModule } from '@angular/router';
import { SubjectListComponent } from './subject-list/subject-list.component';

const routes: Routes = [
  {
    path: 'subjects',
    component: SubjectListComponent
  }
];

export const SubjectRouting = RouterModule.forChild(routes);
