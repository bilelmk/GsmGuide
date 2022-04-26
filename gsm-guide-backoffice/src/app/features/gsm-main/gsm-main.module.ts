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
