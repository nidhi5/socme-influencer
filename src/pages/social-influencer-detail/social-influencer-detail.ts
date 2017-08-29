import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'social-influencer-detail',
  templateUrl: 'social-influencer-detail.html',
  styles: [`
  .profileDisplay{
    background:blue;
    border-radius:50%;
    width:100px; height:100px;
    display: block;
    margin: auto;
  }
  .owner{
    background:url('https://www.thefamouspeople.com/profiles/images/sundar-pichai-1.jpg');
    background-size:cover;
  }
  .company{
    background:url('https://www.infinitybht.com/wp-content/uploads/2017/07/Google_-G-_Logo.svg.png');
    background-size:cover;
  }
  .style_btn1 {
    width: 95%;
    background: #fff;
  }


  `]
})
export class SocialInfluencerDetailPage {

  constructor(public navCtrl: NavController) {

  }

}
