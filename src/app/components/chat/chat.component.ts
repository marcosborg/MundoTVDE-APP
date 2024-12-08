import { Component, OnInit } from '@angular/core';
import { IonFab, IonFabButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logoWhatsapp } from 'ionicons/icons';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  imports: [
    IonFab,
    IonFabButton,
    IonIcon,
  ],
  standalone: true,
})
export class ChatComponent implements OnInit {

  constructor() {
    addIcons({ logoWhatsapp });
  }

  ngOnInit() { }

}
