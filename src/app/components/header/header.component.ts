import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonImg,
  IonButtons,
  IonButton,
  IonIcon,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logOutOutline } from 'ionicons/icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonImg,
    IonButtons,
    IonButton,
    IonIcon,
  ],
  standalone: true,
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private alertController: AlertController,
  ) {
    addIcons({ logOutOutline });
  }

  ngOnInit() { }

  onLogout() {
    this.alertController.create({
      message: 'Tem a certeza?',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Sim',
          handler: () => {
            this.router.navigateByUrl('/');
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel'
        }
      ]
    }).then((alert) => {
      alert.present();
    });

  }

}
