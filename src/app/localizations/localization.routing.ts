import { Routes, RouterModule } from '@angular/router';
import { LocalizationListComponent } from './localization-list/localization-list.component';

const routes: Routes = [
  {
    path: 'localizations',
    component: LocalizationListComponent
  }
];

export const LocalizationRouting = RouterModule.forChild(routes);
