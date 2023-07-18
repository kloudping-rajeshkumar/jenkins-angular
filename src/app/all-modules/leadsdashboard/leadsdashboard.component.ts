import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexTooltip,
  ApexResponsive,
  ApexFill,
} from "ng-apexcharts";
import { routes } from 'src/app/shared/core.index';
export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  xaxis: ApexXAxis | any;
  dataLabels: ApexDataLabels | any;
  grid: ApexGrid | any;
  stroke: ApexStroke | any;
  title: ApexTitleSubtitle | any;
  plotOptions: ApexPlotOptions | any;
  yaxis: ApexYAxis | any;
  legend: ApexLegend | any;
  tooltip: ApexTooltip | any;
  responsive: ApexResponsive[] | any;
  fill: ApexFill | any;
  labels: string[] | any;
  colors: any;
  markers: any;
  subtitle: any;
};
@Component({
  selector: 'app-leadsdashboard',
  templateUrl: './leadsdashboard.component.html',
  styleUrls: ['./leadsdashboard.component.scss']
})
export class LeadsdashboardComponent implements OnInit {
  public routes = routes;
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptionsOne: Partial<ChartOptions>;
  public chartOptionsTwo: Partial<ChartOptions>;
  public chartOptionsThree: Partial<ChartOptions>;
  public chartOptionsFour: Partial<ChartOptions>;
  public chartOptionsFive: Partial<ChartOptions>;
  public chartOptionsSix: Partial<ChartOptions>;
  public chartOptionsSeven: Partial<ChartOptions>;
  public chartOptionsEight: Partial<ChartOptions>;
  constructor() {
    this.chartOptionsOne = {
      series: [2478, 5267],
      chart: {
        width: 350,
        height: 200,
        type: 'pie',
      },
      labels: ['Asia', 'Europe'],
      colors: ['#9a55ff', '#fe7096'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              height: '180px',
              width: '100%',
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };
    this.chartOptionsTwo = {
      series: [
        {
          data: [2478,5267,734,784,433],
          name: 'Products'
        },
      ],
      chart: {
        type: "bar",
        height: '251px',
        width: '100%'
      },
      
      plotOptions: {
        bar: {
          barHeight: "100%",
          distributed: true,
          horizontal: true,
          dataLabels: {
            show:true
          }
        }
      },
      colors: [
        "#fe7096", "#9a55ff","#3cba9f","#e8c3b9","#9a55ff"
      ],
      dataLabels: {
        enabled: true,
        textAnchor: "start",
        style: {
          colors: ["#fff"]
        },
        offsetX: 0,
        dropShadow: {
          enabled: true
        }
      },
      legend : {
        show: false
      },
      stroke: {
        width: 1,
        colors: ["#fff"]
      },
      xaxis: {
        categories: [
          "2000", "2010", "2011", "2015", "2020"
        ]
      },
      yaxis: {
        categories: [
          "2000", "2010", "2011", "2015", "2020"
        ],
      },
    };
    this.chartOptionsThree = {
      series: [
        {
          name: 'Total Sales',
          data: [50, 75, 50, 75, 50, 75, 100],
          color: '#9a55ff',
        },
        {
          name: 'Total Revenue',
          data: [90, 65, 40, 65, 40, 65, 50],
          color: '#da8cff',
        },
      ],
      chart: {
        height: 350,
        width: '100%',
        type: 'line',
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      stroke: {
        show: true,
        curve: 'smooth',
        width: 4,
        dashArray: 0,
    },
      title: {
        text: 'Product Trends by Month',
        align: 'left',
      },
      grid: {
        row: {
          colors: ['transparent'], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
      },
    };
    this.chartOptionsFour = {
      series: [
        {
          name: 'Desktops',
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
          color: '#9a55ff',
        },
      ],
      chart: {
        height: 350,
        width: '100%',
        type: 'line',
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      title: {
        text: 'Product Trends by Month',
        align: 'left',
      },
      grid: {
        row: {
          colors: ['transparent'], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
        ],
      },
    };
    this.chartOptionsFive = {
      series: [
        {
          name: "Projects",
          data: [2478,5267,734,784,433]
        }
      ],
      chart: {
        height: '307px',
        width: '100%',
        type: "bar",
        events: {
          click: function(_chart: any, w: any, e: any) {
            // console.log(chart, w, e)
          }
        }
      },
      colors: [
        "#fe7096", "#9a55ff","#fe7096","#e8c3b9","#9a55ff"
      ],
      plotOptions: {
        bar: {
          columnWidth: "80%",
          distributed: true
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      subtitle: {
        text: "Projects Yearly Sales",
        align: "center"
      },
      grid: {
        show: true
      },
      xaxis: {
        categories: [
          "2006", "2010", "2011", "2012", "2018"
        ],
        
      }
    };
    this.chartOptionsSix = {
      series: [
        {
          name: 'Total Income',
          data: [100, 75, 50, 75, 50, 75, 100],
          color: '#9a55ff',
        },
        {
          name: 'Total Outcome',
          data: [90, 65, 40, 65, 40, 65, 90],
          color: '#da8cff',
        },
      ],
      chart: {
        type: 'bar',
        height: '307px',
        width: '100%'
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '80%',
          endingShape: 'rounded',
        },
      },
      xaxis: {
        categories: ['2006', '', '2008', '', '2010', '', '2012'],
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      fill: {
        opacity: 1,
      },
    };
    this.chartOptionsSeven = {
      series: [
        {
          name: 'Total Cost',
          data: [133, 221, 783, 2478],
          color: '#fe7096',
        },
        {
          name: 'Total Revenue',
          data: [408, 547, 675, 734],
          color: '#9a55ff',
        },
      ],
      chart: {
        type: 'bar',
        height: '251px',
        width: '100%'
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '80%',
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: true,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: ['0', '100', '150', '200'],
      },
      yaxis: {
        title: {
          text: '',
        },
      },
      fill: {
        opacity: 1,
      },
    };
    this.chartOptionsEight = {
      series: [
        {
          name: 'completed',
          type: 'column',
          data: [408, 547, 675, 734],
          color: 'rgba(0,0,0,0.2)',
          labels: "Completed",
        },
        {
          name: 'In progress',
          type: 'column',
          data: [133, 221, 783, 2478],
          color: 'rgba(0,0,0,0.2)',
          labels: "In progress",
        },
        {
          name: 'completed',
          type: 'line',
          data: [408, 547, 675, 734],
          color: '#8e5ea2',
          fill: false,
          labels: "completed",
        },
        {
          name: 'Started',
          type: 'line',
          data: [133, 221, 783, 2478],
          fill: false,
          color: '#fe7096',
          labels: "Started",
        },
      ],
      chart: {
        height: '251px',
        width: '100%',
        type: "line",
        stacked: false,
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: true,
      },
      legend: {
        show: false,
      },
      stroke: {
        width: [1, 1, 4, 4],
      },
      xaxis: {
        categories: ['Task 1', 'Task 2', 'Task 3', 'Task 4']
      },
  }
  }

  ngOnInit() {




  }

}
