import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  userDetails : any;
  userPostData = {"id":"","first_name":""};

  constructor(public navCtrl: NavController, public app: App) {
    const data = JSON.parse(localStorage.getItem('userData'));
    console.log('data:', data)
    this.userDetails = data;
    this.userPostData.id = this.userDetails.id;
    this.userPostData.first_name = this.userDetails.ifirst_name;
  }

  backToWelcome() {
    // API token
    const root = this.app.getRootNav();
    root.popToRoot();
  }

  logout() {
    localStorage.clear();
    setTimeout(() => this.backToWelcome(), 1000);
  }

}
