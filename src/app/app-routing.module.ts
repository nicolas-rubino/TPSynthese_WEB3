import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowFormComponent } from './application/show-form/show-form.component';
import { ContactComponent } from './application/contact/contact.component';
import { CrudComponent } from './application/crud/crud.component';
import { Error404Component } from './application/error404/error404.component';
import { FormulaireComponent } from './application/formulaire/formulaire.component';
import { HomeComponent } from './application/home/home.component';
import { UpdateFormComponent } from './application/update-form/update-form.component';
import { TutorielsComponent } from './application/tutoriels/tutoriels.component';
import { FunComponent } from './application/fun/fun.component';

const routes: Routes = [
  {path:'',redirectTo:'/home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'formulaire', component: FormulaireComponent},
  {path:'tutoriel',
    children:[
      {path:':id', component:TutorielsComponent}
    ]},
  {path:'crud', component: CrudComponent},
  {path:'updateForm/:id', component: UpdateFormComponent},
  {path:'showForm/:id', component: ShowFormComponent},
  {path:'fun', component: FunComponent},
  {path:'contact', component: ContactComponent},
  { path: 'application/fun', loadChildren: () => import('./application/fun/fun.module').then(m => m.FunModule) },
  {path:'**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
