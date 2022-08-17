import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  handlerMessage= '';
  roleMessage = '';

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

 

  async presentAlert() {
    const alert = await this.alertController.create({
      backdropDismiss: false,
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlert2() {
    const alert = await this.alertController.create({
      header: 'Alert!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => { this.handlerMessage = 'Alert canceled'; }
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => { this.handlerMessage = 'Alert confirmed'; }
        }
      ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    this.roleMessage = `Dismissed with role: ${role}`;
  }

  async presentAlertForm() {
    const alert = await this.alertController.create({
      header: 'Please enter your info',
      buttons: [
        {
          text: 'Cancel',
          role:'cancel'
        },
        {
          text: 'Ok',
          handler: (data: any) => {
              console.log(data);
              
          }
        }],
      inputs: [
        {
          placeholder: 'Name'
        },
        {
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 8
          }
        },
        {
          type: 'number',
          placeholder: 'Age',
          min: 1,
          max: 100
        },
        {
          type: 'textarea',
          placeholder: 'A little about yourself'
        }
      ]
    });

    await alert.present();
  }

}
