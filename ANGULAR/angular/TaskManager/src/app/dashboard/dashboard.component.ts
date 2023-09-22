import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent  implements OnInit{
  Designation:String | undefined;
  UserName:String | undefined;
  NumberOfTeammember:number | undefined;
  TotalCostOfAllProject:number | undefined;
  UpcomingProject:number | undefined;
  projectCost:Number | undefined;


  
  ngOnInit(): void {
    this.Designation="TeamLeader";
    this.UserName="Ganesh";
    this.NumberOfTeammember=76;
    this.TotalCostOfAllProject=123;
    this.UpcomingProject=3
    this.projectCost=567;

  }

}
