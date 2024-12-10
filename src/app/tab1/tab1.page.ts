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
  IonButtons,
} from '@ionic/angular/standalone';
import { HeaderComponent } from '../components/header/header.component';
import { ChatComponent } from '../components/chat/chat.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartComponent } from '../components/chart/chart.component';
import { ApiService } from '../services/api.service';
import { PreferencesService } from '../services/preferences.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { FunctionsService } from '../services/functions.service';

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
    ChartComponent,
    IonButtons,
  ]
})
export class Tab1Page {

  constructor(
    private api: ApiService,
    private preferences: PreferencesService,
    private router: Router,
    private loadingController: LoadingController,
    private functions: FunctionsService
  ) { }

  ionViewWillEnter() {
    this.preferences.checkName('access_token').then((resp: any) => {
      this.access_token = resp.value;
      if (!this.access_token) {
        this.router.navigateByUrl('/');
      } else {
        let data = {
          access_token: this.access_token
        }
        this.loadingController.create().then((loading) => {
          loading.present();
          this.api.admin(data).subscribe((resp: any) => {
            loading.dismiss();
            this.activityLaunches = resp.activityLaunches;
            this.last_receipt = resp.last_receipt;
            console.log({
              activityLaunches: this.activityLaunches,
              last_receipt: this.last_receipt
            });
          }, (err) => {
            this.functions.errors(err);
          });
        });
      }
    });
  }

  segment: string = 'graph';
  selectedFile: File | null = null;
  access_token: any;
  activityLaunches: any;
  last_receipt: any;
  allIncome: boolean = false;
  allexpense: boolean = false;
  showReceipt: boolean = false;

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

  checkLastReceiptTime() {
    const now = new Date().getTime();
    const lastReceiptTime = new Date(this.last_receipt.created_at).getTime();
    const timeDifference = now - lastReceiptTime;

    // 24 horas em milissegundos = 24 * 60 * 60 * 1000
    const twentyFourHours = 24 * 60 * 60 * 1000;

    this.showReceipt = timeDifference > twentyFourHours;
  }


}