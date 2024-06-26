import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KlawiaturaComponent } from './klawiatura/klawiatura.component';
import { FormularzComponent } from './formularz/formularz.component';
import { MousesComponent } from './mouses/mouses.component';

const routes: Routes = [
  {path:'klawiatura',component: KlawiaturaComponent},
  {path:'formularz',component: FormularzComponent},
  {path:'mouses',component: MousesComponent},
  {path: '', redirectTo: 'klawiatura', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
