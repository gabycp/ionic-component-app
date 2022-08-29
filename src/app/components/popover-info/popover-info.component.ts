import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
})
export class PopoverInfoComponent implements OnInit {

  items= Array(20);

  constructor( private popoverCtrl: PopoverController ) { }

  ngOnInit() {}

  onClick(pos: number){

    this.popoverCtrl.dismiss({

      item: pos

    });
    //console.log(pos);
    

  }

}
