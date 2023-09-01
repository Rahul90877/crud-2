import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { UserlistComponent } from './userlist/userlist.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path:'adduser', component: AdduserComponent},
  { path:'userlist', component: UserlistComponent},
  { path:'navbar', component: NavbarComponent},
  { path: 'update-user/:id', component: AdduserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
