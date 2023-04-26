import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.page.html',
  styleUrls: ['./layout.page.scss'],
})
export class LayoutPage implements OnInit {

  constructor(private navCtlr : NavController) { }

  ngOnInit() {

  }

 openPage(page : string) {
  this.navCtlr.navigateForward(page)
 }
}
