import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-component-action-sheet',
  templateUrl: './component-action-sheet.page.html',
  styleUrls: ['./component-action-sheet.page.scss'],
})
export class ComponentActionSheetPage implements OnInit {

  constructor(private actionSheetCtlr : ActionSheetController) { }

  ngOnInit() {
  }

  async openActionSheet() {
    let actionSheet = await this.actionSheetCtlr.create({
      header: 'Albuns',
      buttons: [{
        text: 'Excluir',
        icon: 'trash',
        role: 'destructive',
        handler: ()=> {
          console.log('Excluir')
        }
      },
      {
        text: 'Compartilhar',
      icon: 'share',
      handler: ()=> {
        console.log('Compartilhar')
      }
    },
      {
        text: 'Assisir',
      icon: 'caret-forward-outline',
      handler: ()=> {
        console.log('Assistir')
      }
    },
      {
        text: 'Cancelar',
      icon: 'close',
      role: 'cancel',
      handler: ()=> {
        console.log('Cancelar')
      }
    }
  ]
    });

    await actionSheet.present();
  }

}
