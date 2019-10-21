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
      { path: 'clients', loadChildren: './pages/private/clients/clients.module#ClientsPageModule' },
      { path: 'providers', loadChildren: './pages/private/providers/providers.module#ProvidersPageModule' },
      { path: 'orders', loadChildren: './pages/private/orders/orders.module#OrdersPageModule' },
      { path: 'invoices', loadChildren: './pages/private/invoices/invoices.module#InvoicesPageModule' }
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
