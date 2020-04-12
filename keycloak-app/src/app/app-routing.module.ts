import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitsComponent } from './produits/produits.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { AppComponent } from './app.component';
import { AmarComponent } from './amar/amar.component';
import { YassaComponent } from './yassa/yassa.component';


const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: AppComponent },
  { path: 'produits', component: ProduitsComponent },
  { path: 'suppliers', component: SuppliersComponent },
  { path: '**', redirectTo: '/' }
];



// const routes: Routes = [
//   {
//     outlet: '',
//     path: '',
//     children: [
//       {
//         path: 'amar',
//         children: [
//           {
//             path: '',
//             outlet: 'amar',
//             component: AmarComponent
//           },
//           {
//             path: '',
//             outlet: 'yassa',
//             component: YassaComponent
//           }
//         ]
//       },
//       {
//         path: 'yassa',
//         children: [
//           {
//             path: '',
//             outlet: 'yassa',
//             component: YassaComponent
//           },
//           {
//             path: '',
//             outlet: 'amar',
//             component: AmarComponent
//           }
//         ]
//       }
//     ]

//   }
// ];







@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
