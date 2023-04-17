import { Component, OnInit } from '@angular/core';
import { DomainService } from '../domain.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-view-domain',
  templateUrl: './view-domain.component.html',
  styleUrls: ['./view-domain.component.css']
})
export class ViewDomainComponent implements OnInit {
  useremail:string;
  displayemail:Array<string>=[];
  showEmp:string="none";
 
  constructor(private route:ActivatedRoute, private domainService:DomainService) { }
  returnmessage:any;
  userAddInput=new FormControl()
  domainid:any;
  Domain:any;
  showdelete="none";
  SearchWord:string;

  Options:any;
  ngOnInit() {
     this.domainid= this.route.snapshot.params.id;
    this.viewDomain()
    this.autoCompleteUsers()
  }


   viewDomain()
  {
    this.domainService.getDomainById(this.domainid).subscribe(
      Response=>
      {
        this.Domain=Response;
      }
    )
  }

  addEmp(){
    this.showEmp="block"
  }
  close(){
    this.showEmp="none"
    this.useremail="";
    this.userAddInput.reset();
  }

  addU(){
    {{debugger}}
    this.displayemail.push(this.useremail);
    this.useremail="";
  }

  autoCompleteUsers()
  {
    this.domainService.getUsersWithNoDomain()
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

  addUser()
  {
    this.domainService.addEmployeeDomain(this.Domain.domainId,this.userAddInput.value).subscribe(
    Response=>
    {
        this.viewDomain()
    }
  )
  this.autoCompleteUsers();
  this.userAddInput.reset();
  this.showEmp="none";
  }

  remove(value){
    this.displayemail.splice(value, 1);

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
    this.domainService.DeleteEmployeeDomain(this.useremail).subscribe(Response=>
      {
        this.returnmessage=Response;
      })
    this.showdelete="none";
    alert("Deleted Sucessfully");
    this.viewDomain();
    this.autoCompleteUsers();
  }

}
