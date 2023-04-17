import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { UserComponent } from './user.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';


@NgModule({
  declarations: [
    UserComponent,
    ProfileComponent,
    ResetpasswordComponent,
    EditProfileComponent,

   
  ],
  imports: [
    CommonModule,
    UserRoutingModule
   
  ],
  
})
export class UserModule { }
