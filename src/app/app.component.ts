import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { Observable } from 'rxjs';

import { Componentes } from './interfaces/interfaces';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  componentes: Observable<Componentes[]>;

  constructor( private dataService: DataService ) { }

  ngOnInit() {

    this.componentes = this.dataService.getMenuOpts();

  }
}
