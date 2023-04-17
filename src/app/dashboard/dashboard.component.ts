import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { DashboardService } from './dashboard.service';
import { GenderCount } from './GenderCount';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {

  genderCount:any;
  maleCount:number;
  femaleCount:number;
  statusCount:any;
  activeCount:number;
  deActiveCount:number;
  usercount;
  groupcount;
  domaincount;

  UsersList:any;
  
  public pieChartLabels:string[] = ['male', 'female'];
  public pieChartData:number[] = [50,50];
  public pieChartType:string = 'pie';
  public pieChartColors: Array < any > = [{
    backgroundColor: ['#36b5f5', '#f06ca1'],
    
 }];

  public pieChartLabels2:string[] = ['active', 'inactive'];
  public pieChartData2:number[] = [70,10];
  public pieChartType2:string = 'pie';
  public pieChartColors2: Array < any > = [{
    backgroundColor: ['#80ed74', '#afb4c9','#f76d76'],
    
 }];



  constructor(private dashboardService:DashboardService) { }

  ngOnInit() {
    
    this.fetchGroupCount();
    this.fetchUserCount();
    this.fetchDomainCount();
    this.fetchGenderCount();
    this.fetchStatusCount();

    this.fetchUsers();
  }


  fetchUsers()
  {
    this.dashboardService.getUsersList().subscribe(response=>
      {
        this.UsersList=response;
      }
    )
  }


  fetchUserCount()
  {
    this.dashboardService.getUsersCount().subscribe(responce=>
    {
      this.usercount=responce;
    })
  }

  fetchDomainCount(){
    this.dashboardService.getDomainsCount().subscribe(response=>
    {
      this.domaincount=response;
    })
  }

  fetchGroupCount()
  {
    this.dashboardService.getGroupsCount().subscribe(response=>
    {
      this.groupcount=response;
    })
  }

  fetchGenderCount()
  {
    this.dashboardService.countByGender()
    .pipe(map(Response=>
      {
        this.genderCount=Response;  
        this.maleCount=this.genderCount.maleCount;
        this.femaleCount=this.genderCount.femaleCount;
        this.pieChartData=[this.maleCount,this.femaleCount];
        return this.pieChartData
      }))
    .subscribe(response=>
      {
          console.log(response);
      }) 

  }
   fetchStatusCount()
  {
    this.dashboardService.countByStatus()
    .pipe(map(Response=>
      {
        this.statusCount=Response;  
        this.activeCount=this.statusCount.activeCount;
        this.deActiveCount=this.statusCount.deActiveCount;
        this.pieChartData2=[this.activeCount,this.deActiveCount];
        return this.pieChartData2
      }))
    .subscribe(response=>
      {
          console.log(response);
      }) 

  }

}
