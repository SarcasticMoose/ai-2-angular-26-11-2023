import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ItemsComponent} from "./items/items.component";
import {UsersComponent} from "./users/users.component";
import {StartComponent} from "./start/start.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {adminGuard} from "./admin.guard";
import {authGuard} from "./auth.guard";

const routes: Routes = [
  { path: "items", component: ItemsComponent,canActivate: [authGuard] },
  { path: "users", component: UsersComponent,canActivate: [adminGuard] },
  { path: "", pathMatch: "full", component: StartComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
