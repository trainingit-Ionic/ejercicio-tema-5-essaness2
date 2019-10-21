import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardPage,
    children: [
      {
        path: 'clients',
        children: [
          {
            path: '',
            loadChildren: '../clients/clients.module#ClientsPageModule'
          }
        ]
      },
      {
        path: 'providers',
        children: [
          {
            path: '',
            loadChildren: '../providers/providers.module#ProvidersPageModule'
          }
        ]
      },
      {
        path: 'orders',
        children: [
          {
            path: '',
            loadChildren: '../orders/orders.module#OrdersPageModule'
          }
        ]
      },
      {
        path: 'invoices',
        children: [
          {
            path: '',
            loadChildren: '../invoices/invoices.module#InvoicesPageModule'
          }
        ]
      }

    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}
