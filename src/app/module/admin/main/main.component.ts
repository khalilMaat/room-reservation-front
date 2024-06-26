import {Component, OnInit} from '@angular/core';
import {Chart} from "angular-highcharts";
import {RoomService} from "../../../core/service/room.service";
import {map} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  userChart: any;
  carChart: any;
  reservationChart: any;
  dataa: any;
  reservationChartData: any;
  carChartData: any;
  userChartData: any;




  constructor(private RoomService: RoomService) {

  }

  ngOnInit() {
    this.NumberRoom();
    this.PickupMonth();
    this.countByCreatedOn();

  }
  NumberRoom() {
    this.RoomService.countByNumberRoom().subscribe(
      (response: any) => {
        this.dataa = response;
        this.carChartData = this.dataa.map((item: any) => ({
          name: item[0],
          y: item[1]
        }));
        this.createCarChart();

        console.log("this.dataa", this.dataa)
        console.log("this.carChartData", this.carChartData)
      }
    )
  }

  PickupMonth() {
    this.RoomService.countByPickupMonth().subscribe(
      (response: any) => {
        this.dataa = response;
        this.reservationChartData = this.dataa.map((item: any) => ({
          name: item[0],
          y: item[1]
        }));
        this.createReservationChart();

        console.log("this.dataa", this.dataa)
        console.log("this.reservationChartData", this.reservationChartData)
      }
    )
  }

  countByCreatedOn() {
    this.RoomService.countByCreatedOn().subscribe(
      (response: any) => {
        this.dataa = response;
        this.userChartData = this.dataa.map((item: any) => ({
          name: item[0],
          y: item[1]
        }));
        this.createUserChart();

        console.log("this.dataa", this.dataa)
        console.log("this.userChartData", this.userChartData)
      }
    )
  }





  createCarChart() {
    this.carChart = new Chart({
      chart: {
        type: 'line',
        options3d: {
          enabled: true,
          alpha: 45,
          beta: 0
        }
      },
      title: {
        text: 'Car Inventory Distribution'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },

      credits: {
        enabled: false
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          depth: 35,
          dataLabels: {
            enabled: true,
            format: '{point.name}'
          }
        }
      },
      series: [{
        type: 'pie',
        name: 'Share',
        data: this.carChartData
      }]

    })
  }

  createUserChart() {
    this.userChart = new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: 'Registered Users Insights'
      },
      credits: {
        enabled: false
      },
      series: [
        {
          name: 'Registered Users Per Month',
          data: this.userChartData,
        } as any
      ]

    })
  }


  createReservationChart() {
    this.reservationChart = new Chart({
      chart: {
        type: 'column'
      },
      title: {
        text: 'Monthly Reservation Insights'
      },

      yAxis: {
        min: 0,
        title: {
          text: 'Reservation / Month'
        }
      },

      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      series: [
        {
          type: 'column',
          name: 'Reservation',
          data: this.reservationChartData
        }
      ]

    })
  }


  pieChart = new Chart({
    chart: {
      type: 'pie',
      plotShadow: false,
    },

    credits: {
      enabled: false,
    },

    plotOptions: {
      pie: {
        innerSize: '99%',
        borderWidth: 10,
        borderColor: '',
        slicedOffset: 10,
        dataLabels: {
          connectorWidth: 0,
        },
      },
    },

    title: {
      verticalAlign: 'middle',
      floating: true,
      text: 'Diseases',
    },

    legend: {
      enabled: false,
    },

    series: [
      {
        type: 'pie',
        data: [
          {name: 'COVID 19', y: 1, color: '#eeeeee'},

          {name: 'HIV/AIDS', y: 2, color: '#393e46'},

          {name: 'EBOLA', y: 3, color: '#00adb5'},
          {name: 'DISPORA', y: 4, color: '#eeeeee'},
          {name: 'DIABETES', y: 5, color: '#506ef9'},
        ],
      },
    ],
  })


}
