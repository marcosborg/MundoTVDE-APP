import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonImg } from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    IonHeader, 
    IonToolbar, 
    IonTitle,
    IonImg,
  ],
  standalone: true,
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
