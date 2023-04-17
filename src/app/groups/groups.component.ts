import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Group } from './group';
import { GroupsService } from './groups.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';

import {map} from 'rxjs/operators';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  useremail:string;
  displayemail:Array<string>=[];
  showdelete="none";
  constructor(private groupService:GroupsService, private router:Router) { }

  showgroup:string="none";

  GroupList:any;
  Group:any;
  returnvalue:any;

  SearchWord:string;
  confirm:boolean=false;
  ngOnInit() {
    this.fetchgroups();
  }

  fetchgroups()
  {
    this.groupService.getGroups().subscribe(response=>
      {
        this.GroupList=response;
      })
  }


  appGroup(){
    this.showgroup="block"

  }
  close(){
    this.showgroup="none"
    this.showdelete="none"
  }

  add(){
    debugger
    if(this.useremail!=null&&this.useremail!=undefined&&this.useremail!="")
    {
      if(!this.displayemail.includes(this.useremail))
      {
        this.displayemail.push(this.useremail);
      }
    }
    this.useremail="";
  }

  remove(value){
    this.displayemail.splice(value, 1);

  }

  confirmDelete()
  {
    debugger
    this.groupService.deleteGroup(this.confirm)
    .subscribe(response=>{
      alert("Deleted Successfully");
      this.fetchgroups();
    }

    )
      this.showgroup="none";
      this.showdelete="none";
  }

  onAddGroup(form:NgForm)
  {
    debugger
    const value=form.value;
    this.groupService.createGroup(value)
      .subscribe(
      response=>
      {
          console.log(response,"add")
          this.fetchgroups();

      }
    )
    this.showgroup="none"
    this.fetchgroups();
  }

  deleteGroup(id){
    
    this.showdelete="block";
    this.confirm=id;
  }

 

}
