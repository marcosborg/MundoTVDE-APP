import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from '../components/header/header.component';
import { ChatComponent } from '../components/chat/chat.component';
import {
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonButton,
  IonSelect,
  IonSelectOption,
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [
    IonContent,
    HeaderComponent,
    ChatComponent,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    CommonModule,
    FormsModule,
    IonButton,
    IonSelect,
    IonSelectOption,
  ]
})
export class Tab3Page {

  constructor() { }

  segment: string = 'documents';
  access_token: any;
  selectedFile: File | null = null;

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      console.log('Arquivo selecionado:', file.name);
    }
  }

  onFileUpload(): void {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      // Simule o envio para um servidor (substitua pela sua API)
      console.log('Enviando arquivo:', this.selectedFile.name);

      // Faça a requisição para sua API (exemplo usando HttpClient):
      // this.http.post('URL_DA_SUA_API', formData).subscribe(response => {
      //   console.log('Resposta do servidor:', response);
      // });
    }
  }

}
