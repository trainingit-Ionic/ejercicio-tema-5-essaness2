import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ModalController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  isLogged: boolean;
  constructor(   public authService: AuthService, public modalController: ModalController) { 
    this.authService.getIsLogged().subscribe(
      data => this.isLogged = data
    );
  }

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

  // isLogged(): boolean {
  //   let logged = false;
  //    this.authService.getIsLogged().subscribe(
  //     (data) => {
  //       console.log(data);
  //       logged = data;
  //     }
  //   );
  //   console.log(logged);
  //   return logged;
  // }
}
