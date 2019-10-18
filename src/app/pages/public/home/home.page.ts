import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ModalController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(   public authService: AuthService, public modalController: ModalController) { }

  async presentModal() {
    const modal = await this.modalController.create({
      component: LoginPage,
      componentProps: { value: 123 }
    });
    
 
    return await modal.present();
  }


  
  logoutClicked()
  {
    this.authService.logout();
  }

}
