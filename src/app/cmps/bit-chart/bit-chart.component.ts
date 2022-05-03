import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartOptions, GridLineOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-bit-chart',
  templateUrl: './bit-chart.component.html',
  styleUrls: ['./bit-chart.component.scss'],
})
export class BitChartComponent implements OnInit {
  @Input() bitcoinData: any;
  chartData = [
    {
      data: [65, 59, 80, 81, 56, 55, 40],
      label: 'Bitcoin-Dollar Rate',
    },
  ];
  public lineChartLabels: Label[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  barChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      display: true,
      labels: {
        fontColor: 'white',
      },
    },
    title: {
      display: false,
      text: 'Bitcoin',
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            fontSize: 16,
            fontColor: 'white',
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            fontSize: 16,
            fontColor: 'white',
          },
        },
      ],
    },
  };

  barChartColors: Color[] = [
    {
      borderWidth: 0,
      borderColor: 'white',
      backgroundColor: '#009FFD',
    },
  ];
  constructor() {}
  ngOnInit(): void {
    let tempArr = this.bitcoinData.filter((xyObj, index) => {
      if (index % 30 === 0) {
        return xyObj.y;
      }
    });

    tempArr.length = 12;

    this.chartData[0].data = tempArr;
    this.setMonths();
  }

  setMonths = () => {
    let months: Label = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    let currMonth = new Date().getMonth();

    let newMonthList = [];
    let t = currMonth - 1;
    for (let n = 0; n < 12; n++) {
      if (t < 0) t = 11;
      newMonthList.push(months[t]);
      t--;
    }

    this.lineChartLabels = newMonthList;
  };
}
