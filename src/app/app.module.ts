import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MessengerPage } from '../pages/messenger/messenger';
import {AngularFireModule} from "angularfire2";

var firebaseAuth = {
  apiKey: "AIzaSyDloSPpn-sb6lkS-EsEqZk9MsMEfzP_3Ao",
  authDomain: "chatapp-de57e.firebaseapp.com",
  databaseURL: "https://chatapp-de57e.firebaseio.com",
  projectId: "chatapp-de57e",
  storageBucket: "chatapp-de57e.appspot.com",
  messagingSenderId: "278245426306"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MessengerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth)
],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MessengerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
