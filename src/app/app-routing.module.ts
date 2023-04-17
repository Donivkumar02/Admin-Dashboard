import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewuserComponent } from './userlist/newuser/newuser.component';
import { UserlistComponent } from './userlist/userlist.component';
import { ViewUserdetailsComponent } from './userlist/view-userdetails/view-userdetails.component';
import { EditUserComponent } from './userlist/edit-user/edit-user.component';
import { GroupsComponent } from './groups/groups.component';
import { ViewgroupComponent } from './groups/viewgroup/viewgroup.component';
import { DomainComponent } from './domain/domain.component';
import { ViewDomainComponent } from './domain/view-domain/view-domain.component';



const routes: Routes = [
  { path: 'login', component: AuthComponent },
  { path: '',redirectTo:"dashboard", pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: UserlistComponent,  
  children: [
    {
      path:'new', component: NewuserComponent
    }
  ]
  },
  { path: 'new', component: NewuserComponent},
  { path: 'view/:id', component: ViewUserdetailsComponent},
  { path: 'edit/:id', component: EditUserComponent},
  { path: 'groups', component: GroupsComponent},
  { path: 'viewgroup/:id', component: ViewgroupComponent},
  { path: 'domain', component: DomainComponent},
  { path: 'viewdomain/:id', component: ViewDomainComponent},
  { path: 'user',loadChildren: () => import(`./user/user.module`).then(m => m.UserModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
