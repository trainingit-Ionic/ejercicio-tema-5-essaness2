import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingController, NavController  } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(public authService:  AuthService, public loadingController: LoadingController,  public nav: NavController ) {     
    this.authService.getIsLogged().subscribe((result) => {
      console.log('menu ' + result);
      if (result === false) {
     this.nav.navigateRoot('home');
      }
    });
  }

  ngOnInit() {s
  }

  logoutClicked() {
    this.showLoading();
    setTimeout(() => {
      this.authService.logout();
      this.nav.navigateRoot('home');
    }, 500);
  }

  isLogged(): boolean {
    let logged = false;
     this.authService.getIsLogged().subscribe(
      (data) => {
        logged = data;
      }
    );
    return logged;
  }

  async showLoading() {
    const loading = await this.loadingController.create({
      message: 'Login',
      duration: 200
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }

}
