import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { AboutComponent } from "./components/about/about.component";
import { TasksComponent } from "./components/tasks/tasks.component";

export const routes: Route[] = [
  {
    path: '',
    component: TasksComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
