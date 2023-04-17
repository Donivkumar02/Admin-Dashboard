import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { UserComponent } from './user.component';


const routes: Routes = [
 { path: '', component: UserComponent, children: [
  { path: 'profile', component: ProfileComponent },
  { path: 'reset', component: ResetpasswordComponent },
  { path: 'edit', component: EditProfileComponent }
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
