import { Component, OnInit } from '@angular/core';
import { DomainService } from './domain.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.css']
})
export class DomainComponent implements OnInit {

  constructor(private domainService:DomainService) { }
  useremail:string;
  displayemail:Array<string>=[];
  showEmp:string="none";
  showDomain:string="none";
  showDelete:string="none";

  SearchWord:string;

  confirm:boolean=false;

  DomainList:any;
  ngOnInit() {
    this.fetchDomains();
  }

  fetchDomains()
  {
    this.domainService.getDomains().subscribe(response=>
      {
        this.DomainList=response;
      })
  }

  
  addDomain(){
    this.showDomain="block"
  }
   onAddDomain(form:NgForm)
  {
    const value=form.value;
    this.domainService.createDomain(value)
      .subscribe(
      response=>
      {
          console.log(response,"add")
          this.fetchDomains();

      }
    )
    this.showDomain="none"
    this.fetchDomains();
  }


  close(form:NgForm){
    this.showDomain="none"
    this.showDelete="none"
    form.reset();
  }

  deleteDomain(id){
    this.showDelete="block";
    this.confirm=id;
  }

  confirmDelete()
  {
    debugger
    this.domainService.deleteDomain(this.confirm)
    .subscribe(response=>{
      alert("Deleted Successfully");
      this.fetchDomains();
    }

    )
      this.showDomain="none"
      this.showDelete="none"
  }

  add(){
    {{debugger}}
    this.displayemail.push(this.useremail);
    this.useremail="";
  }

  remove(value){
    this.displayemail.splice(value, 1);

  }

}
