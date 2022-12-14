import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../../service/personas.service';


@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {

  feriados: any;

  constructor(private feriadosService: PersonasService) { }

  ngOnInit() {
    this.feriadosService.getTopHeadLines().subscribe(resp => {
      console.log('feriados', resp);
      this.feriados=resp;
    })
  }

}
