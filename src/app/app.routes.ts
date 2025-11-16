import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Modalidades } from './pages/modalidades/modalidades';
import { Ausencias } from './pages/ausencias/ausencias';
import { Departments } from './pages/departments/departments';
import { Users } from './pages/users/users';
import { Activity } from './pages/activity/activity';
import { Schedules } from './pages/schedules/schedules';
import { Settings } from './pages/settings/settings';

export const routes: Routes = [

{
    path: 'dashboard',
    component: Dashboard,
    pathMatch: 'full',
},
{
    path: 'modalidades',
    component: Modalidades,
    pathMatch: 'full',
},
{
    path: 'ausencias',
    component: Ausencias,
    pathMatch: 'full',
},
{
    path: 'departments',
    component: Departments,
    pathMatch: 'full',
},
{
    path: 'users',
    component: Users,
    pathMatch: 'full',
},
{
    path: 'activity',
    component: Activity,
    pathMatch: 'full',
},
{
    path: 'schedules',
    component: Schedules,
    pathMatch: 'full',
},
{
    path: 'settings',
    component: Settings,
    pathMatch: 'full',
}

];
