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
    this.userDetails = data;
    console.log('this.userDetails:', this.userDetails)
    this.userPostData.id = this.userDetails.id;
    this.userPostData.first_name = this.userDetails.first_name;
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
