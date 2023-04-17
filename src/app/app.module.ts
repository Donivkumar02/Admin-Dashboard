import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { UserlistComponent } from './userlist/userlist.component';
import { NewuserComponent } from './userlist/newuser/newuser.component';
import { ViewUserdetailsComponent } from './userlist/view-userdetails/view-userdetails.component';
import { EditUserComponent } from './userlist/edit-user/edit-user.component';
import { GroupsComponent } from './groups/groups.component';
import { ViewgroupComponent } from './groups/viewgroup/viewgroup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DomainComponent } from './domain/domain.component';
import { ViewDomainComponent } from './domain/view-domain/view-domain.component';
import { DashboardService } from './dashboard/dashboard.service';
import { GroupsService } from './groups/groups.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatPaginatorModule, MatTableModule, MatSortModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { DomainService } from './domain/domain.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchFilterPipe } from './search-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HeaderComponent,
    SidebarComponent, 
    FooterComponent, 
    DashboardComponent, 
    UserlistComponent, 
    NewuserComponent, 
    ViewUserdetailsComponent, 
    EditUserComponent, 
    GroupsComponent, 
    ViewgroupComponent, 
    DomainComponent, 
    ViewDomainComponent, SearchFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    Ng2SearchPipeModule,
  ],
  providers: [DashboardService,
    GroupsService,
    DomainService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
