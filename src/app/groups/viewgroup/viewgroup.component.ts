import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { GroupsService } from '../groups.service';

@Component({
  selector: 'app-viewgroup',
  templateUrl: './viewgroup.component.html',
  styleUrls: ['./viewgroup.component.css']
})
export class ViewgroupComponent implements OnInit {
  useremail:string;
  returnmessage:any;
  showEmp:string="none";
  showdelete="none";
  
  constructor(private route:ActivatedRoute, private groupService:GroupsService,) { }

  userAddInput=new FormControl()
  
  groupid:any;
  Group:any;

  Options:any;

  SearchWord:string;

  ngOnInit() {
   this.groupid= this.route.snapshot.params.id;
   this.viewGroup()
   this.autoCompleteUsers()
  }

  viewGroup()
  {
    this.groupService.getGroupById(this.groupid).subscribe(
      Response=>
      {
        this.Group=Response;
      }
    )
  }

  autoCompleteUsers()
  {
    this.groupService.getUsersWithNoGroup()
    .pipe(map( responseData=>{
      const arrayData=[];
      for(const key in responseData)
      {
          arrayData.push({...responseData[key],id:key});
      }
      return arrayData;
    }

    ))
    .subscribe(response=>
      {
        this.Options=response;
      })
  }

  addEmp(){
    this.showEmp="block"
  }
  close(){
    this.showEmp="none"
    this.userAddInput.reset();
  }

  addUser(){
    this.groupService.addEmployeeGroup(this.Group.groupId,this.userAddInput.value).subscribe(
      Response=>
      {
          this.viewGroup()
      }
    )
    this.userAddInput.reset();
    this.showEmp="none";
  }

  deleteUser(value)
  {
    this.showdelete="block";
    this.useremail=value;
  }

  closeDelete()
  {
    this.showdelete="none";
  }

  confirmDelete(){
    this.groupService.DeleteEmployeeGroup(this.useremail).subscribe(Response=>
      {
        this.returnmessage=Response;
      })
    this.showdelete="none";
    alert("Deleted Sucessfully");
    this.viewGroup();
    this.autoCompleteUsers();
  }



}
