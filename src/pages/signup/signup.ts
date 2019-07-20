import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { LoginPage } from './../login/login';
import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  responseData: any;
  userData = { "user": { "first_name":"", "last_name":"", "email":"", "birth_date":"", "password":"", "password_confirmation":"" } }

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signup(){
    console.log('this.userData:', this.userData)
    this.authService.postData(this.userData,'users').then((result) => {
      console.log("result: ", result)
      this.responseData = result;
      console.log('this.responseData:', this.responseData)
      if(this.responseData) {
        console.log(this.responseData);
        localStorage.setItem('userData', JSON.stringify(this.responseData));
        this.navCtrl.push(TabsPage);
      }
      else { 
        console.log("User already exists"); 
      }
    }, (err) => {
    // Error log
    });
  }

  login() {
    this.navCtrl.push(LoginPage);
  }

}
