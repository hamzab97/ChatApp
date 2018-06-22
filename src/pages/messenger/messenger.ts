import { Component } from '@angular/core';
import {IonicPage, Item, NavController, NavParams} from 'ionic-angular';
import {AngularFireDatabase, AngularFireList, SnapshotAction} from "angularfire2/database";
import CryptoJS from 'crypto-js';
import { map } from 'rxjs/operators';
import {AngularFirestoreCollection} from "angularfire2/firestore";
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";
import * as firebase from 'firebase';

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
  subscription: Subscription;
  
  encryptedMessages: Observable<any[]>;
  ref = firebase.database().ref('/messenger');
  private messages: AngularFireList<any>;

  constructor(public db: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
    // this.username = this.navParams.get('username');
    // this.message = this.navParams.get('message');
    console.log('hoiluuluu')
  }

  ngOnInit(){
    // this.subscription = this.encryptedMessages.subscribe(data => {
    //   data.map(elem =>{
    //     this.messages.push(elem);
    //   })
    // });
    // this.encryptedMessages.subscribe(console.log);
    console.log('ngonit launch');
    this.messages = this.getMessage();
  }

  getMessage(){
    return this.db.list('/messenger');
    // this.ref.on('value', data => {
    //   let tmp = [];
    //   data.forEach( data => {
    //     tmp.push({
    //       key: data.key,
    //       username: data.val().username,
    //       message: data.val().message
    //     })
    //   });
    //   this.messages = tmp;
    // })
  }

  sendMessage(){
    // this.message = CryptoJS.AES.encrypt(this.message, 'secret key 123');
    // let bytes = CryptoJS.AES.decrypt(this.message.toString(), 'secret key 123');
    // // this.db.list("/messenger").push({
    // //   username: this.username,
    // //   message: this.message
    // // }) //access database and push new message
    // .then(()=>{
    //   //what happens once message is sent
    // });
    // let bytes = CryptoJS.AES.decrypt(this.message.toString(), 'secret key 123');
    // let plaintext = bytes.toString(CryptoJS.enc.Utf8);
    this.ref.push({
      username: this.username,
      message: this.message
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessengerPage');
  }

}
