import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';

const routes: Routes = [ 
    { path: "", component:HomeComponent},
    { path: 'item-list', loadChildren: () => import('./components/pages/item-list/item-list.module').then(m => m.ItemListModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
