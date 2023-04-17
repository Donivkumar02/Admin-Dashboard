import { Component, OnInit, ViewChild, OnChanges  } from '@angular/core';
import { UserService } from './user.service';
import { User } from './User';
import { IUser } from './IUser';

import { MatTableDataSource, MatSort, MatPaginator,MatFormFieldModule } from '@angular/material';
import { ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})

export class UserlistComponent implements OnInit, OnChanges { 
  UserList:IUser[];
  dataSource: MatTableDataSource<IUser>;
  displayedColumns: string[] = ['title', 'firstName','email','phone','nationality'];  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;  
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  showdelete="none";
  confirmid;
  constructor(private userService:UserService,route:ActivatedRoute) {
    route.params.subscribe(val => {

      if (val instanceof NavigationEnd) {
        this.fetchUsers();
        this.dataSource.paginator = this.paginator;  
        this.dataSource.sort = this.sort;  
      }
      
    });
   }

  ngOnInit() {
    this.fetchUsers();
    this.dataSource.paginator = this.paginator;  
    this.dataSource.sort = this.sort;  
  }
  ngOnChanges()
  {
    this.fetchUsers();
    this.dataSource.paginator = this.paginator;  
    this.dataSource.sort = this.sort; 
  }

 applyFilter(filterValue: string) {  
    this.dataSource.filter = filterValue.trim().toLowerCase();  
  
    if (this.dataSource.paginator) {  
      this.dataSource.paginator.firstPage();  
    }  
  } 


  fetchUsers()
  {
    this.userService.getUsersList().subscribe(response=>
      {
        debugger
        this.dataSource = new MatTableDataSource(response);  
        this.dataSource.paginator = this.paginator;  
        this.dataSource.sort = this.sort;
        this.UserList=response;
       
      })
  }

  close(){
    this.showdelete="none"
  }

  deleteUser(userId){
    
    this.showdelete="block";
    this.confirmid=userId;
  }

  confirmDelete()
  {
    this.userService.DeleteUser(this.confirmid)
    .subscribe(response=>{
      alert("Deleted Successfully");
      this.fetchUsers();
    }

    )
      this.showdelete="none";
  }

}
