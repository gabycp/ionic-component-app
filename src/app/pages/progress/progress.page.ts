import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {

  porcentaje: number = 0.05;

  constructor() { }

  ngOnInit() {
  }

  rangeChange( e: any ){

    //console.log(e.detail.value);
    const val = e.detail.value;

    this.porcentaje = val/100;
    
  }

}
