import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActivePostsComponent } from './active-posts/active-posts.component';
import { InactivePostsComponent } from './inactive-posts/inactive-posts.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'active-posts', component: ActivePostsComponent},
  {path: 'inactive-posts', component: InactivePostsComponent},
];//active-posts e inactive-posts sono ciò che vengono chiamati "parametri di percorso" o "segmenti di percorso" nell'URL.

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
