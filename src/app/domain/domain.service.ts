import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DomainService {

  constructor(private http:HttpClient) { }

  Url:string="https://localhost:44342/api/Domains/"
  UrlUser:string="https://localhost:44342/api/Users/"
  EmployeeUrl:string="https://localhost:44342/api/EmployeeDetail/"


  getDomains():any
  {
    var result= this.http.get(this.Url+"GetDomains");
    return result;
  }

  createDomain(domain:any): Observable<any> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<any>(this.Url+"AddDomain",  
    domain, httpOptions);  
  } 

  deleteDomain(domainid:any): Observable<any>
  {
    return this.http.delete<any>(this.Url+"DeleteDomain/"+domainid);
  }

  getUsersWithNoDomain():Observable<any>
  {
    debugger
    var result= this.http.get(this.UrlUser+"UsersDomainNotAssigned");
    return result;
  }

  getDomainById(id):Observable<any>
  {
    var result= this.http.get(this.Url+"GetDomainById/"+id);
    return result;
  }

  addEmployeeDomain(domainid,email):Observable<any>
  {
    debugger
    var result= this.http.get(this.EmployeeUrl+"AddEmployeeDomain/DomainId/"+domainid+"/email/"+email);
    return result;
  }

  DeleteEmployeeDomain(emailid):Observable<any>
  {
    debugger
    var result= this.http.delete(this.EmployeeUrl+"DeleteEmployeeDomain/"+emailid);
    return result;
  }

}
