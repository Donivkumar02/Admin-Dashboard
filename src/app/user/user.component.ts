import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  btncol1:string;
  bgcol1:string;
  btncol2: string;
  bgcol2: string;
  btncol3: string;
  bgcol3: string;
  
  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.router.navigate(['profile'],{relativeTo: this.route});
    
  }
  btn1(){
    this.btncol1="rgb(53, 52, 52)";
    this.bgcol1="darkgrey";
    this.btncol2="darkgrey";
    this.bgcol2="lightgray";
    this.btncol3="darkgrey";
    this.bgcol3="lightgray";
    
    this.router.navigate(['profile'],{relativeTo: this.route});
   }
   btn2(){
     this.btncol2="rgb(53, 52, 52)";
     this.bgcol2="darkgrey";
     this.btncol1="darkgrey";
    this.bgcol1="lightgray";
    this.btncol3="darkgrey";
    this.bgcol3="lightgray";
    this.router.navigate(['reset'],{relativeTo: this.route});
    }
    btn3(){
     this.btncol3="rgb(53, 52, 52)";
     this.bgcol3="darkgrey";
     this.btncol2="darkgrey";
    this.bgcol2="lightgray";
    this.btncol1="darkgrey";
    this.bgcol1="lightgray";
 
    this.router.navigate([''],{relativeTo: this.route});
    }
}
