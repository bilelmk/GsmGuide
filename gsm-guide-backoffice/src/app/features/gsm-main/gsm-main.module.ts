import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { GsmMainComponent } from "./gsm-main.component";
import { SharedModule } from "../../shared/shared.module";

const routes: Routes = [
  {
    path: '',
    component: GsmMainComponent,
    children: [
      {
        path: '',
        redirectTo : 'clients' ,
        pathMatch: 'full',
      },
      {
        path: 'admins',
        loadChildren: () => import('./gsm-admins/gsm-admins.module').then(m => m.GsmAdminsModule)
      },
      {
        path: 'clients',
        loadChildren: () => import('./gsm-clients/gsm-clients.module').then(m => m.GsmClientsModule)
      },
      {
        path: 'repairers',
        loadChildren: () => import('./gsm-repairers/gsm-repairers.module').then(m => m.GsmRepairersModule)
      },
      {
        path: 'requests',
        loadChildren: () => import('./gsm-requests/gsm-requests.module').then(m => m.GsmRequestsModule)
      },
      {
        path: 'marks',
        loadChildren: () => import('./gsm-marks/gsm-marks.module').then(m => m.GsmMarksModule)
      },
      {
        path: 'parts',
        loadChildren: () => import('./gsm-parts/gsm-parts.module').then(m => m.GsmPartsModule)
      },
      {
        path: 'locations',
        loadChildren: () => import('./gsm-location/gsm-location.module').then(m => m.GsmLocationModule)
      },
      {
        path: 'statistics',
        loadChildren: () => import('./gsm-statistics/gsm-statistics.module').then(m => m.GsmStatisticsModule)
      },
      {
        path: 'actualities',
        loadChildren: () => import('./gsm-actualities/gsm-actualities.module').then(m => m.GsmActualitiesModule)
      },
      {
        path: 'shortcuts',
        loadChildren: () => import('./gsm-shortcuts/gsm-shortcuts.module').then(m => m.GsmShortcutsModule)
      },
      {
        path: 'sms',
        loadChildren: () => import('./gsm-sms/gsm-sms.module').then(m => m.GsmSmsModule)
      }
    ]
  }
];

@NgModule({
  declarations: [
    GsmMainComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class GsmMainModule { }
