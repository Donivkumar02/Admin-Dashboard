import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }

  UserUrl:string="https://localhost:44342/api/Users/"
  GroupUrl:string="https://localhost:44342/api/Groups/"
  DomainUrl:string="https://localhost:44342/api/Domains/"
  EmployeeUrl:string="https://localhost:44342/api/EmployeeDetail/"

  getUsersCount():any
  {
    
    var result= this.http.get(this.UserUrl+"Count");
    return result;
  }

  getGroupsCount():any
  {
    
    var result= this.http.get(this.GroupUrl+"Count");
    return result;
  }

   getDomainsCount():any
  {
    
    var result= this.http.get(this.DomainUrl+"Count");
    return result;
  }

  countByGender():any
  {
    
    var result= this.http.get(this.UserUrl+"CountByGender");
    return result;
  }

  countByStatus():any
  {
    
    var result= this.http.get(this.EmployeeUrl+"CountByStatus");
    return result;
  }

  getUsersList(): Observable<any> {
    var result= this.http.get(this.UserUrl+"GetUsers");
    return result;
  }
}
