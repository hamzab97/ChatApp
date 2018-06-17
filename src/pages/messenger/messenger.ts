import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import {AngularFireDatabase} from "angularfire2/database";
import {FirebaseListObservable} from "angularfire2/database-deprecated";

/**
 * Generated class for the MessengerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-messenger',
  templateUrl: 'messenger.html',
})
export class MessengerPage {
  username: string='';
  message: string='';

  constructor(public db: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
    this.username = this.navParams.get('username');
    this.message = this.navParams.get('message');
    console.log(this.navParams);
  }

  sendMessage(){
    db.list("/messenger").push({
      username: this.username,
      message: this.message
    }); //access database and push new message
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessengerPage');
  }

}
