import { Component, OnInit } from '@angular/core';
import {HomeService} from '../../../../core/services/home/home.service';
import {HorarioModel} from '../../../../shared/models/horarioModel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],

})
export class DashboardComponent implements OnInit {



  datavalue:HorarioModel[];
  panelOpenState = false;

  constructor(private homeService:HomeService) { }

  ngOnInit(): void {

    this.homeService.getHorario().subscribe(value => {

      this.datavalue=value;
    },error => {
      console.log(error);
    })

  }

}
