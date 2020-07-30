import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private platform: Platform,
              private storage: Storage) {}

  public async save( key: string, value: any) {
    if (this.platform.is('android')) {
      // celular
      this.storage.set(key, value);
    } else {
      // computadora
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  public async get( key: string) {
    if (this.platform.is('android')) {
      // celular
      return this.storage.get(key).then(data => {
          return data;
      });
    } else {
      // computadora
      if (localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key));
      }
    }
    return null;
  }

  public remove(key: string){
    if (this.platform.is('android')) {
      this.storage.remove(key);
    } else {
      localStorage.removeItem(key);
    }
  }

  public async clear() {
    return this.storage.clear();
  }

}
