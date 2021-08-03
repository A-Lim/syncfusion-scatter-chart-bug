import { Component, OnInit, ViewChild } from '@angular/core';
import { AxisModel, ChartAreaModel, ChartComponent, MarkerSettingsModel, TooltipSettingsModel } from '@syncfusion/ej2-angular-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('scatterChart')
  scatterChartInstance!: ChartComponent;

  title: string = 'scatterchart';

  chartArea: ChartAreaModel = {
    border: {
      width: 0
    }
  };
  primaryXAxis: AxisModel = {
    minimum: 0,
    interval: 1,
    labelIntersectAction: 'Hide',
    title: 'Time elapsed since alert (hours)',
  };
  primaryYAxis: AxisModel = {
    minimum: 0,
    interval: 5,
    title: 'Consequence'
  };
  markerSettings: MarkerSettingsModel = {
    visible: true,
    width: 12,
    height: 12,
    shape: 'Circle'
  };
  toolTipSettings: TooltipSettingsModel = {
    enable: true,
    header: '${series.name}',
  };
  
  seriesData?: SeriesDataModel[];

  constructor() {

  }

  ngOnInit() {
    setTimeout(() => {
      this.seriesData = [
        <SeriesDataModel>{
          name: 'Test',
          dataSource: [
            { xValue: 1, yValue: 1 },
            { xValue: 2, yValue: 1 },
            { xValue: 3, yValue: 1 },
            { xValue: 4, yValue: 1 },
          ],
          color: 'red',
        },
        <SeriesDataModel> {
          name: 'Test2',
          dataSource: [
            { xValue: 1, yValue: 1 },
            { xValue: 1, yValue: 2 },
            { xValue: 1, yValue: 3 },
            { xValue: 1, yValue: 4 },
          ],
          color: 'blue'
        }
      ];
    }, 100);
  }
}


export interface SeriesDataModel {
  name: string;
  dataSource: ChartDataModel[];
  color?: string;
}

export interface ChartDataModel {
  xValue: string | number;
  yValue: string | number;
  color?: string;
  data?: any;
}