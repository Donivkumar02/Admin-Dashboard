import { Component, OnInit } from '@angular/core';
import * as data from './statecity';
import { FormsModule, NgForm } from '@angular/forms';
import { GroupsService } from 'src/app/groups/groups.service';
import { User } from '../User';
import { DomainService } from 'src/app/domain/domain.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { HttpEventType } from '@angular/common/http';


@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {
  changeText: boolean;
 
details1:string;
details2:string;
detailsbg1:string;
detailsbg2:string;
personaldetailsPage:string;
employeedetailsPage:string;
savealert:string="none";
imageUrl:any="../../../assets/images/defaultimage.png";
imagedata:any;

userdata:any;
employeedata:any;
userFormData:User;

 
  progress: number;
  message: string;
  
  changeCountry(count) {
    // this.cities = this.stateList.find(con => con.name == count).cities;
  }
  constructor(private groupService:GroupsService,
              private domainService:DomainService,
              private userService:UserService,
              private router: Router) 
  { }
  
  cityList: Array<any>;
  stateList:Array<any>;
  GroupList:any;
  DomainList:any;

  ngOnInit() {
    this.changeText = false;
    this.fetchgroups();
    this.fetchDomains();
    this.stateList=this.userService.getStates()
  }

  fetchDomains()
  {
    this.domainService.getDomains().subscribe(response=>
      {
        this.DomainList=response;
      })
  }

  fetchgroups()
  {
    this.groupService.getGroups().subscribe(response=>
      {
        this.GroupList=response;
      })
  }

  onAddUser(form:NgForm)
  {
    this.userFormData=form.value;
  }

  onAddEmployee(form:NgForm)
  {
    this.userFormData.employeeDetail=form.value;  
    this.savealert="block";
  }

  selectstate(state)
  {
    {{debugger}}
    this.cityList = this.stateList.find(st => st.name == state).cities;
  }

  gotoemployee(){
      this.detailsbg1="white";
      this.details1="black";
      this.detailsbg2="rgb(226, 224, 224)";
      this.details2="blue";
      this.personaldetailsPage="none";
      this.employeedetailsPage="block"

  }

  gotopersonal(){
    this.detailsbg1="rgb(226, 224, 224)";
      this.details1="blue";
      this.detailsbg2="white";
      this.details2="black";
      this.personaldetailsPage="block";
      this.employeedetailsPage="none"

  }

  saveDetails(){
    // this.savealert="block";
    // this.userService.createUser(this.userFormData)
    //   .subscribe(
    //   response=>
    //   {
    //       console.log(response,"add")
    //       alert("User Added Successfully");
    //   }
    // )
    // this.router.navigate(['/users',]);
  }
  alertNo()
  {
    this.savealert="none";
  }
  alertConfirm(){
    debugger
    var ext =  this.imagedata.name.split('.').pop();
    const photoname='_' + Math.random().toString(36).substr(2, 9)+"_"+this.userFormData.firstName+"."+ext;
    this.userFormData.photoFileName=photoname;
    this.userService.createUser(this.userFormData)
      .subscribe(
      response=>
      {
          console.log(response,"add")
          alert("User Added Successfully");
      }
    )
    
    this.uploadImage(photoname)

    this.savealert="none"
    this.router.navigate(['/users',]);

  }

  uploadImage(photoname)
  {
    debugger
    const formData = new FormData();
    formData.append('image', this.imagedata, photoname);
    this.userService.uploadPhoto(formData).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress)
        this.progress = Math.round(100 * event.loaded / event.total);
      else if (event.type === HttpEventType.Response) {
        this.message = 'Upload success.';
        console.log(this.message);
      }
    });
  }

  showImage(files){
    var reader = new FileReader();
    reader.readAsDataURL(files[0]); 
    this.imagedata=<File>files[0];
    reader.onload = (_event) => { 
      this.imageUrl = reader.result;
  }
}


}
