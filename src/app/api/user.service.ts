import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';
import { AnyTxtRecord } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  applicationID: any;
  apiKey: any;
  urlServer: string;
  token: any;

  constructor(
    private storage: StorageService, private router: Router,
    public httpClient: HttpClient, public alertController: AlertController) {
    this.applicationID = '8A1E3BFB-011F-D969-FF85-2D438712E500/';
    this.apiKey = '43E7A7EF-2404-46D8-836F-0B901CDF06BA/';
    this.urlServer = 'https://api.backendless.com/';
  }

  // get User
getUser(): Observable<any> {
  const headers = new HttpHeaders({
    'user-token': this.token
  });
  return this.httpClient.get(this.urlServer + this.applicationID + this.apiKey + 'data/Users',
  {headers})
  .pipe(map(this.extractData),
  catchError(error => {
    return of(`Caught an error logout: ${error}`);
  })
);
}

// registro
async registry(name: any, email: any, pass: any) {
  return this.httpClient.post(this.urlServer + this.applicationID + this.apiKey + 'users/register',
      JSON.stringify(this.createJSONRegistry(name, email, pass)))
      .subscribe(
         async (res: Response) => {
          if (res.status === 401) {
            alert(res.status);
          } else {
            const alert = await this.alertController.create({
              header: 'Información',
              subHeader: 'Éxito',
              message: 'El registro fue realizado con exito!',
              backdropDismiss: false,
              buttons: ['Continuar']
            });
            await alert.present();
            this.router.navigate(['login']);
          }
        }, async (error: HttpErrorResponse) => {
          if (error.status === 401) {
            const alert = await this.alertController.create({
              header: 'Información',
              subHeader: 'Error',
              message: error.error.message,
              backdropDismiss: false,
              buttons: ['OK']
            });
            await alert.present();
          }
          console.log('error login'); console.log(error);
        }
      );
}
  createJSONRegistry(nombre: any, correo: any, clave: any): any {
    const jsonLogin = {
      email: correo,
      name: nombre,
      password: clave
    };
    return jsonLogin;
  }

// valida token
    validateLogin() {
      return this.httpClient.get(this.urlServer + this.applicationID + this.apiKey + 'users/isvalidusertoken/' + this.token);
    }

// logout
logout(): Observable<any> {
  const headers = new HttpHeaders({
    'user-token': this.token
  });
  return this.httpClient.get(this.urlServer + this.applicationID + this.apiKey + 'users/logout',
  {headers})
  .pipe(map(this.extractData),
  catchError(error => {
    return of(`Caught an error logout: ${error}`);
  })
);
}


async login(email: any, pass: any) {
      return this.httpClient.post(this.urlServer + this.applicationID + this.apiKey + 'users/login',
      JSON.stringify(this.createJSONLogin(email, pass)))
      .subscribe(
         (res: Response) => {
          console.log('res login'); console.log(res);
          if (res.status === 401) {
            alert(res.status);
          } else {
            this.token = res['user-token'];
            console.log('token login'); console.log(this.token);
            this.storage.save(environment.session, res);
            this.router.navigate(['/folder/Users']);
          }
        }, async (error: HttpErrorResponse) => {
          if (error.status === 401) {
            const alert = await this.alertController.create({
              header: 'Información',
              subHeader: 'Error',
              message: error.error.message,
              backdropDismiss: false,
              buttons: ['OK']
            });
            await alert.present();
          }
          console.log('error login'); console.log(error);
        }
      );
  }

  getCodeHTTP(error: HttpErrorResponse) {

  }

  createJSONLogin(email: any, pass: any) {
    const jsonLogin = {
      login: email,
      password: pass
    };
    return jsonLogin;
  }

  private extractData(res: Response) {
    if (res.status === 401) {
      alert(res.text);
    } else {
      const body = res;
      console.log('extractData login'); console.log(body);
      return body || { };
    }
  }

}
