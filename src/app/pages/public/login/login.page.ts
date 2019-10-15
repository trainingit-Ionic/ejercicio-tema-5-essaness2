import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingController, AlertController, NavController  } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  


  constructor(   private authService: AuthService, public loadingController: LoadingController, public alertController: AlertController,   public nav: NavController) { }

  ngOnInit() {
  }


  login(form: NgForm) {
    this.showLoading();
    this.authService.login({username:form.value.username, password: form.value.password}).subscribe(
      data => {
        console.log(data);
        if (data === true)
        {
          this.nav.navigateRoot('/clients');
        }
        else
        {
          
          this.showError("Username or password are incorrect!");
        }
        
      },
      error => {
        console.log(error);
      },
      () => {
        console.log('other');
      }
    );
  }

  async showError(text) {
    
    const alert = await this.alertController.create({
      header: 'Authentication failed',      
      message: text,
      buttons: ['OK']
    });

    await alert.present();
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
