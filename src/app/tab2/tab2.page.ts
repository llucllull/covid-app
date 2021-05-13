import { Component, OnInit } from '@angular/core';
import { DadesService } from '../services/dades.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page implements OnInit{
  searchTerm= '';
  results: any;
  countries: Array<any>;
  filterCountries: Array<any>;
  
  constructor(private api: DadesService, private navCtrl: NavController) {
    
  }

  ngOnInit(): void{
    this.api.getDadesBuscar().subscribe(
      (data: any) => {
        this.countries = data;
        console.log(data)
        this.filterCountries = this.countries.filter((c) => c.Country.toLowerCase().includes(this.searchTerm.toLowerCase()));
      }
    );
    
  }

  searchEventFired() {
    this.filterCountries = this.countries.filter((c) => c.Country.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }

  obrirPais(p:string) {
    const titleEscaped = encodeURIComponent(p);
    this.navCtrl.navigateForward(`/pais/`+titleEscaped);
  }
}
