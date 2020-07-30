import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from '../api/storage.service';
import { environment } from 'src/environments/environment';
import { MenuController, AlertController } from '@ionic/angular';
import { UserService } from '../api/user.service';
import { LoadingService } from '../api/loading.service';
import { timeout } from 'rxjs/operators';
 

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  fireToken: string;
  login: any;
  users: any[] = [];

  constructor(
    private menu: MenuController, public userService: UserService, public alertController: AlertController,
    private loadingCtrl: LoadingService, private router: Router,
    private storage: StorageService, private activatedRoute: ActivatedRoute) { }

  async ngOnInit() {
    this.menu.enable(true);
    // this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.userService.validateLogin().subscribe(
        async (susses) => {
          console.log('this.userService.validateLogin');
          console.log(susses);
          if (susses === true) {
            this.userService.getUser().subscribe(
            (sussesGetUser) => {
              console.log('sussesGetUser');
              console.log(sussesGetUser);
              this.users = sussesGetUser;
            }, (error) => {
              console.log('error');
              console.log(error);
            }
          );
          } else {
            const alert = await this.alertController.create({
              header: 'Información',
              subHeader: 'Ya ha expirado la sesión',
              message: 'Por favor, Inicia sesión nuevamente!',
              backdropDismiss: false,
              buttons: ['OK']
            });
            await alert.present();
            this.router.navigate(['login']);
          }
        }
      );
  }

 async ionViewWillEnter() {
    await this.menu.enable(true);
  }

  logout(){
    this.userService.logout().pipe().subscribe((susses) => {
                this.storage.save(environment.session, susses);
                this.router.navigate(['login']);
              }, (error) => {
                  console.log('error logout');
                  console.log(error);
              }
            );
  }

}
