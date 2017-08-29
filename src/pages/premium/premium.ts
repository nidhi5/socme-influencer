import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'premium',
  templateUrl: 'premium.html',
  styles: [`

  .apply_color {
      background-color: #b2dff4 !important;
    }

    .swiper_color {
  color: #007aff !important;
}
  .sales-header{
    background:#756ddd;
    color:white;
  }
  .business-header{
    background:#0091ca;
    color:white;
  }
  .career-header{
    background:#2f7b15;
    color:white;
  }
  ion-card-header{
    background: #007aff !important;
    color: #fff !important;
  }
  ion-item{
    font-size:12px !important;
  }
  `]
})
export class PremiumPage {

  constructor(public navCtrl: NavController) {

  }

}
