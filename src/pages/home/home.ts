import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { MessengerPage } from '../messenger/messenger'
//methods go in here

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  //create fields
  username: string='hamza'; //create username field of type string

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) { //initialize fields

  }

  showAlert(title, message) {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  loginUser(){
    //loginUser method for onlicck on login button
    //change for firebase authentication later
    if (/^[a-zA-Z0-9]+$/.test(this.username)){
      //sign in the user
      this.navCtrl.push(MessengerPage, {
        username: this.username
      })//push a page, same as return res in express
      //create new page from terminal. ionic g page *name*
    }else{
      this.showAlert('Error', 'Invalid Username');
    }
  }

}
