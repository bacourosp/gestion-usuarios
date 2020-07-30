import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { UserService } from 'src/app/api/user.service';
import { timeout } from 'rxjs/operators';
import { LoadingService } from 'src/app/api/loading.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { StorageService } from 'src/app/api/storage.service';
import { BrowserStack } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  constructor(
    private storage: StorageService,
    private menu: MenuController, public userService: UserService,
    private loadingCtrl: LoadingService, private router: Router) { }

  ngOnInit() {
  }

  async ionViewWillEnter() {
    await this.menu.enable(false);
   }

  async login(form: any){
    await this.userService.login(form.form.value.email, form.form.value.password);
  }

  goRegistry(){
    this.router.navigate(['registre']);
  }

}
