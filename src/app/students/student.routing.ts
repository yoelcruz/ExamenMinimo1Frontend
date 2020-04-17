import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  {
    path: '',
    component: StudentListComponent
  }
];

export const StudentRouting = RouterModule.forChild(routes);
