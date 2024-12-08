import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from '../components/header/header.component';
import { ChatComponent } from '../components/chat/chat.component';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss'],
    imports: [IonContent, HeaderComponent, ChatComponent]
})
export class Tab2Page {

  constructor() {}

}
