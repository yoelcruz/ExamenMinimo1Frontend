import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      /* {
        path: '',
        redirectTo: 'students',
        pathMatch: 'full'
      }, */
      {
        path: 'students',
        loadChildren: () => import('./students/student.module').then(m => m.StudentModule),
	  },
	  {
        path: 'subjects',
        loadChildren: () => import('./subjects/subject.module').then(m => m.SubjectModule),
      },
      {
        path: 'localizations',
        loadChildren: () => import('./localizations/localization.module').then(m => m.LocalizationModule),
	  }
    ]
  }
];

export const AppRouting = RouterModule.forRoot(routes);
