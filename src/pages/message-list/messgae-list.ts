import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'message-list',
  templateUrl: 'message-list.html',
  styles: [`

    .swiper_color {
      color: #007aff !important;
    }

  `]
})
export class MessageListPage {

  constructor(public navCtrl: NavController) {

  }

}
