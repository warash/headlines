import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { headlines } from './mock.api';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  headlines: any;

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
    this.headlines = headlines.map((h: any) => {
      const imgUrl = `assets/images/20170314/${h.id}.jpg`;
      return {imgUrl, headline: h.headline};
    });
  }
}
