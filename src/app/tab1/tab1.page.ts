import { Component, OnInit } from '@angular/core';
import { DadesService } from '../services/dades.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  global: any;

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
  };

  public barChartLabels: Label[] = ['2021'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [];

  constructor(private api: DadesService ) {}

  ngOnInit(): void{
    this.api.getDadesGlobals().subscribe(
      (data: any) => {
        this.global = data;   
        this.barChartData = [
          { data: [this.global.Global.TotalConfirmed], label: 'Contagiats' },
          { data: [this.global.Global.TotalRecovered], label: 'Curats' },
          { data: [this.global.Global.TotalDeaths], label: 'Morts' }
        ];
      }
    );

  }

  

}
