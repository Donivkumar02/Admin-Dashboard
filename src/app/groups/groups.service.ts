import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Group } from './group';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor(private http:HttpClient) { }

  Url:string="https://localhost:44342/api/Groups/"
  UrlUser:string="https://localhost:44342/api/Users/"
  EmployeeUrl:string="https://localhost:44342/api/EmployeeDetail/"


  getGroups():any
  {
    var result= this.http.get(this.Url+"GetGroups");
    return result;
  }

  createGroup(group:any): Observable<any> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<any>(this.Url+"AddGroup",  
    group, httpOptions);  
  } 

  deleteGroup(groupid:any): Observable<any>
  {
    return this.http.delete<any>(this.Url+"DeleteGroup/"+groupid);
  }

  getUsersWithNoGroup():Observable<any>
  {
    debugger
    var result= this.http.get(this.UrlUser+"UsersGroupNotAssigned");
    return result;
  }

  getGroupById(id):Observable<any>
  {
    var result= this.http.get(this.Url+"GetGroupById/"+id);
    return result;
  }

  addEmployeeGroup(groupid,email):Observable<any>
  {
    debugger
    var result= this.http.get(this.EmployeeUrl+"AddEmployeeGroup/GroupId/"+groupid+"/email/"+email);
    return result;
  }

  DeleteEmployeeGroup(emailid):Observable<any>
  {
    debugger
    var result= this.http.delete(this.EmployeeUrl+"DeleteEmployee/"+emailid);
    return result;
  }
}
