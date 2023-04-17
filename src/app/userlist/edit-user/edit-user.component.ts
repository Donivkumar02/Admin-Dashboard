import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DomainService } from 'src/app/domain/domain.service';
import { GroupsService } from 'src/app/groups/groups.service';
import { UserService } from '../user.service';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpEventType } from '@angular/common/http';
import { IUser } from '../IUser';
import { UpdateUser } from '../UpdateUser';
import { EmployeeDetail } from '../EmployeeDetail';
import { User } from '../User';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  

  DomainList:any;
  GroupList:any;
  cityList: Array<any>;
  stateList:Array<any>;

  userid:any;
  emailid:any;
  User:IUser;
  UserEmp:any;

  imagedata:any=null;
  userFormData:UpdateUser;
  EmployeeDetail:EmployeeDetail;
  userData:User;

  imageUrl:any;
  savealert:string="none";
  photoname:any;

  progress: number;
  message: string;
  constructor(private groupService:GroupsService,
              private domainService:DomainService,
              private userService:UserService,
              private route:ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.userid= this.route.snapshot.params.id;
    this.fetchgroups();
    this.fetchDomains();
    this.viewUser();
    this.viewEmployee();
    this.stateList=this.userService.getStates()
  }

  onUpdateUser(form:NgForm)
  {   debugger
      this.userFormData=form.value;
      this.userFormData.email;
      this.userFormData.photoFileName=this.User.photoFileName;
      
      //Employee data
      this.EmployeeDetail={
        groupId:this.userFormData.groupId,
       domainId:this.userFormData.domainId,
        baseLocation:this.userFormData.baseLocation,
        experience:this.userFormData.experience,
      }
      

      this.userFormData.employeeDetail=this.EmployeeDetail;
      this.savealert="block";
  }

   alertConfirm(){
    debugger
    console.log(this.userFormData);
    if(this.imagedata!=null)
    {
        var ext =  this.imagedata.name.split('.').pop();
        this.photoname='_' + Math.random().toString(36).substr(2, 9)+"_"+this.userFormData.firstName+"."+ext;
        this.userFormData.photoFileName=this.photoname;
        this.uploadImage(this.photoname)
    }
    
    this.userService.updateUser(this.userid,this.userFormData)
      .subscribe(
      response=>
      {
          console.log(response,"add")
          alert("User Added Successfully");
      }
    )
       
    this.savealert="none"
    this.router.navigateByUrl("/users");

  }
  alertNo()
  {
    this.savealert="none";
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

  selectstate(state)
  {
    {{debugger}}
    this.cityList = this.stateList.find(st => st.name == state).cities;
  }

  viewUser()
  {
    this.userService.getUserById(this.userid).subscribe(
      Response=>
      {
        this.User=Response;
        this.imageUrl="https://localhost:44342/Photos/"+this.User.photoFileName;
        this.emailid=this.User.email;
        
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

  showImage(files){
      
    var reader = new FileReader();
    reader.readAsDataURL(files[0]); 
    this.imagedata=<File>files[0];
    reader.onload = (_event) => { 
      this.imageUrl = reader.result;
  }

 
}
}
