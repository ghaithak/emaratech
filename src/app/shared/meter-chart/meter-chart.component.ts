import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-meter-chart',
  templateUrl: './meter-chart.component.html',
  styleUrls: ['./meter-chart.component.scss']
})
export class MeterChartComponent implements OnInit {

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
