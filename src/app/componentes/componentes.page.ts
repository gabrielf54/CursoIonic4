import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componentes',
  templateUrl: './componentes.page.html',
  styleUrls: ['./componentes.page.scss'],
})
export class ComponentesPage implements OnInit {

  constructor(private navCtlr : NavController) { }

  ngOnInit() {
  }

  openPage(page : string) {
    this.navCtlr.navigateForward(page)
   }
}
