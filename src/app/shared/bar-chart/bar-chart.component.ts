import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  @Input() percent: number = 50;
  @Input() title: string = "title";

  constructor() {
    let that = this;
    var x = setInterval(function () {
      that.percent = Math.random()*100;
      
    }, 5000);
  }


  ngOnInit(): void {
  }

}
