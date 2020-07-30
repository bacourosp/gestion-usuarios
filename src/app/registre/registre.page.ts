import { async } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { UserService } from '../api/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.page.html',
  styleUrls: ['./registre.page.scss'],
})
export class RegistrePage implements OnInit {

  constructor(private menu: MenuController, public userService: UserService, private router: Router) { }

  ngOnInit() {

  }

  async ionViewWillEnter() {
    await this.menu.enable(false);
   }

   async registry(form: any) {
    await this.userService.registry(form.form.value.name, form.form.value.email, form.form.value.password);
   }

   goLogin(){
    this.router.navigate(['login']);
  }

}
