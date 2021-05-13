import { Component, OnInit } from '@angular/core';
import { DadesService } from '../services/dades.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  paisos: Array<any> = [];

  constructor(private api: DadesService, private navCtrl: NavController) {}

  ngOnInit(): void{
    this.api.getDadesGlobals().subscribe(
      (data: any) => {
        this.paisos = data.Countries;
      }
    );
  }

  obrirPais(p:string) {
    const titleEscaped = encodeURIComponent(p);
    this.navCtrl.navigateForward(`/pais/`+titleEscaped);
  }

}
