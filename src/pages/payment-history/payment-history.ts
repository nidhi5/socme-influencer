import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'payment-history',
  templateUrl: 'payment-history.html',
  styles: [`
    .date{
      color:gray;
    }
    ion-card-header{
      padding-bottom: 0px;
    }
    .swiper_color {
  color: #007aff !important;
}
.apply_color {
      background-color: #b2dff4 !important;
    }
  `]
})
export class PaymentHistoryPage {

  constructor(public navCtrl: NavController) {

  }

}
