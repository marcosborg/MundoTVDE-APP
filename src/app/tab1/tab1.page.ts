import { Component } from '@angular/core';
import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
  IonBadge,
  IonItem,
  IonButton,
} from '@ionic/angular/standalone';
import { HeaderComponent } from '../components/header/header.component';
import { ChatComponent } from '../components/chat/chat.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [
    IonContent,
    HeaderComponent,
    ChatComponent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    CommonModule,
    FormsModule,
    IonGrid,
    IonRow,
    IonCol,
    IonBadge,
    IonItem,
    IonButton,
  ]
})
export class Tab1Page {
  constructor() { }

  segment: string = 'income';
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