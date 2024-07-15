import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './modules/add-task/add-task.component';
import { CompletedComponent } from './modules/completed/completed.component';
import { HomeComponent } from './modules/home/home.component';
import { InboxComponent } from './modules/inbox/inbox.component';
import { TodayComponent } from './modules/today/today.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'addTask', component: AddTaskComponent},
  { path: 'today', component: TodayComponent},
  { path: 'inbox', component: InboxComponent},
  { path: 'today', component: TodayComponent},
  { path: 'completed', component: CompletedComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
