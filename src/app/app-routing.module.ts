import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'perfil/:id', component: PerfilComponent },
  { path:'**', pathMatch:'full', redirectTo:'' }];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
