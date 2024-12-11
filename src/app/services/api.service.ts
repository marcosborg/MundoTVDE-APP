import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private loadingController: LoadingController,
  ) { }

  sandbox: boolean = false;

  //baseUrl: string = 'http://127.0.0.1:8000/api/';
  baseUrl: string = 'https://mundotvde.pt/api/';

  httpOptions = {
    headers: new HttpHeaders({
      'Accept-Language': 'pt'
    })
  };

  login(data: any) {
    return this.http.post(this.baseUrl + 'login', data, this.httpOptions);
  }

  user(data: any) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Accept-Language': 'pt',
        'Authorization': 'Bearer ' + data.access_token
      })
    };
    return this.http.get(this.baseUrl + 'app/user', this.httpOptions);
  }

  admin(data: any) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Accept-Language': 'pt',
        'Authorization': 'Bearer ' + data.access_token
      })
    };
    return this.http.get(this.baseUrl + 'app/admin', this.httpOptions);
  }

  myReceipts(data: any) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Accept-Language': 'pt',
        'Authorization': 'Bearer ' + data.access_token
      })
    };
    return this.http.get(this.baseUrl + 'app/my-receipts', this.httpOptions);
  }

  reports(data: any) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Accept-Language': 'pt',
        'Authorization': 'Bearer ' + data.access_token
      })
    };
    return this.http.get(this.baseUrl + 'app/reports', this.httpOptions);
  }

  reportPdf(data: any) {
    this.loadingController.create().then((loading) => {
      loading.present();
      const url = this.baseUrl + 'app/reports/pdf/' + data.activity_launch_id;
      const headers = new HttpHeaders({
        Authorization: `Bearer ${data.access_token}`,
      });
      // Faz a requisição e manipula a resposta
      this.http.get(url, { headers, responseType: 'blob' }).subscribe((response: Blob) => {
        loading.dismiss();
        const fileURL = window.URL.createObjectURL(response);
        window.open(fileURL, '_blank');
      }, (error) => {
        loading.dismiss();
        console.error('Erro ao abrir o PDF:', error);
      });
    });
  }

  documents(data: any) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Accept-Language': 'pt',
        'Authorization': 'Bearer ' + data.access_token
      })
    };
    return this.http.get(this.baseUrl + 'app/documents', this.httpOptions);
  }
}
