import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { CompletedComponent } from './completed/completed.component';

const routes: Routes = [
  { path: 'todo', component: TodoComponent },
  { path: 'completed', component: CompletedComponent },
  { path: '', redirectTo: '/todo', pathMatch: 'full' }, // reindirizzamento predefinito
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}