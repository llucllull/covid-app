import { Component } from '@angular/core';
import { DadesService } from '../services/dades.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page{
  searchTerm= '';
  results: any;
  
  constructor(private api: DadesService, private navCtrl: NavController) {}

  searchEventFired() {
    this.api.getDadesPaisosCompletes(this.searchTerm).subscribe(
      (data: any) => {
        this.results = data; 
      }
    );
  }

  obrirPais(p:string) {
    const titleEscaped = encodeURIComponent(p);
    this.navCtrl.navigateForward(`/pais/`+titleEscaped);
  }

 
}
