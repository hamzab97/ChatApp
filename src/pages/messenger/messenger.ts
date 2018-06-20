import { Component } from '@angular/core';
import {IonicPage, Item, NavController, NavParams} from 'ionic-angular';
import {AngularFireDatabase, AngularFireList, SnapshotAction} from "angularfire2/database";
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
  encryptedMessages: Observable<SnapshotAction<any>[]>;
  subscription: Subscription;
  messages: any;

  constructor(public db: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
    // this.username = this.navParams.get('username');
    // this.message = this.navParams.get('message');
    console.log('hoiluuluu')
  }

  ngOnInit(){
    this.encryptedMessages = this.getMessage().snapshotChanges();
    this.subscription = this.encryptedMessages.subscribe(data => {
      data.map(elem =>{
        this.messages.push(elem);
      })
    });
    console.log('ngonit launch')
  }

  getMessage(){
    return this.db.list('/messenger');
  }

  sendMessage(){
    // this.message = CryptoJS.AES.encrypt(this.message, 'secret key 123');
    // let bytes = CryptoJS.AES.decrypt(this.message.toString(), 'secret key 123');
    this.db.list("/messenger").push({
      username: this.username,
      message: this.message
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
