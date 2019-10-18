import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingController, AlertController, NavController  } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  
  passwordShow: boolean = false;
  passwordType: string = 'password';

  constructor(   private authService: AuthService, public loadingController: LoadingController, public alertController: AlertController,   public nav: NavController, public viewCtrl: ModalController) { }

  ngOnInit() {
  }


  login(form: NgForm) {
    this.showLoading();
    this.authService.login({username:form.value.username, password: form.value.password}).subscribe(
      data => {
        console.log(data);
        if (data === true)
        {
          if ( this.viewCtrl != null){
            this.dismiss();
          }
          this.nav.navigateRoot('/menu');
        }
        else
        {
          
          this.showError(this.authService.getLastLoginErrorMessage());
        }
        
      },
      error => {
        console.log(error);
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


  dismiss() {
    this.viewCtrl.dismiss();
    }

    public togglePassword(){
      if (this.passwordShow === false){
        this.passwordShow =true;
        this.passwordType = 'text';
      }else{
        this.passwordShow =false;
        this.passwordType = 'password';
      }
    }
}
