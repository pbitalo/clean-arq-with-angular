import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AccountancyComponent } from '../accountancy/accountancy.component'
import { InvoicingComponent } from '../invoicing/invoicing.component'
import { HomeComponent } from './home.component'

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Home',
    },
    children: [
      { path: 'invoicing', component: InvoicingComponent },
      { path: 'accountancy', component: AccountancyComponent },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
