import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';

const routes: Routes = [
  { path: 'list', component: ProductsListComponent },
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: '**', pathMatch: 'full', redirectTo: 'list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
