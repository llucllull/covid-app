import { Component, OnInit } from '@angular/core';
import { DadesService } from '../services/dades.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  global: any;

  constructor(private api: DadesService ) {}

  ngOnInit(): void{
    this.api.getDadesGlobals().subscribe(
      (data: any) => {
        this.global = data;   
      }
    );
  }

}
