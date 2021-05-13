import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DadesService } from '../services/dades.service';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.page.html',
  styleUrls: ['./pais.page.scss'],
})
export class PaisPage implements OnInit {
  pais: any;

  constructor(private activatedRoute: ActivatedRoute, private api: DadesService) { }

  ngOnInit() {
    const title = this.activatedRoute.snapshot.paramMap.get('id');
    const decodedTitle = decodeURIComponent(title);

    this.api.getDadesPaisosCompletes(decodedTitle).subscribe(
      (data: any) => {
        this.pais = data;
        this.pais = this.pais.reverse();
      }
    );
  }

}
