import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomainService } from 'src/app/domain/domain.service';
import { GroupsService } from 'src/app/groups/groups.service';
import { UserService } from '../user.service';
import { IEmployee } from './Employee';

@Component({
  selector: 'app-view-userdetails',
  templateUrl: './view-userdetails.component.html',
  styleUrls: ['./view-userdetails.component.css']
})
export class ViewUserdetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute,
              private userService:UserService) { }

  userid:any;
  User:any;
  UserEmp:any;

  employeeStatus:string="DeActivate";
  lockAcc:string="Lock Account";


  ngOnInit() {
    this.userid= this.route.snapshot.params.id;
    this.viewUser();
    this.viewEmployee();
    
  }

  

  viewUser()
  {
    this.userService.getUserById(this.userid).subscribe(
      Response=>
      {
        this.User=Response;
      }
    )
  }

  viewEmployee()
  {
    this.userService.getUserEmployeeById(this.userid).subscribe(
      Response=>
      {
        this.UserEmp=Response;
      }
    )
  }

}
