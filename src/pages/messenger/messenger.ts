import { Component } from '@angular/core';
import {IonicPage, Item, NavController, NavParams} from 'ionic-angular';
import {AngularFireDatabase} from "angularfire2/database";
import CryptoJS from 'crypto-js';
import { map } from 'rxjs/operators';
import {AngularFirestoreCollection} from "angularfire2/firestore";
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";

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
  encryptedMessages: object[] = [];
  private subscription: Subscription;

  constructor(public db: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
    this.username = this.navParams.get('username');
    this.message = this.navParams.get('message');
    this.subscription = this.db.list('messenger').valueChanges().map(elem =>{
      this.encryptedMessages.push(elem);
      console.log(elem);
    }).subscribe();
    // for (let m in this.encryptedMessages){
    //   m = m.toString(CryptoJS.enc.Utf8);
    // }
    console.log('hoiluuluu')
  }

  getDecryptedMessages(){
    return this.encryptedMessages;
  }

  sendMessage(){
    this.message = CryptoJS.AES.encrypt(this.message, 'secret key 123');
    let bytes = CryptoJS.AES.decrypt(this.message.toString(), 'secret key 123');
    this.db.list("/messenger").push({
      username: this.username,
      message: bytes
    }) //access database and push new message
    .then(()=>{
      //what happens once message is sent
    });
    // let bytes = CryptoJS.AES.decrypt(this.message.toString(), 'secret key 123');
    // let plaintext = bytes.toString(CryptoJS.enc.Utf8);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessengerPage');
  }

}
