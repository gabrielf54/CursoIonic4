import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-component-alert',
  templateUrl: './component-alert.page.html',
  styleUrls: ['./component-alert.page.scss'],
})
export class ComponentAlertPage implements OnInit {

  constructor(private alertCtlr: AlertController) { }

  ngOnInit() {
  }

  async abrirAlertSimples() {
    let alert = await this.alertCtlr.create({
      header: 'Alert Simples',
      subHeader: 'Sub Header',
      message: "Esta é a mensagem",
      buttons: ['OK']
    });

    await alert.present();
  }

  async abrirAlertMultiplosBotoes() {
    let alert = await this.alertCtlr.create({
      header: 'Alert Multiplo',
      message: "Esta é a mensagem",
      buttons: ['OK', 'Abrir Modal', 'Cancelar']
    });

    await alert.present();
  }

  async abrirAlertConfirmacao() {
    let alert = await this.alertCtlr.create({
      header: 'Confirmação',
      message: 'Deseja cancelar o pedido XPTZI',
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log("Cancelado");
        }
      },
      {
        text: 'Pagar',
        handler: () => {
          console.log("Pago com sucesso");
        }
      }
      ]
    });
    await alert.present();

  }

  async abrirPrompt() {
    let alert = await this.alertCtlr.create({
      header: 'Acesso restrito',
      inputs: [
        {
          name: 'login',
          type: 'text',
          placeholder: 'Informe seu login'
        },
        {
          name: 'senha',
          type: 'password',
          placeholder: 'Informe sua senha'
        }
      ],
      buttons: [
        {
          text: 'Novo',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log("Aqui vai uma tela de cadastro de novos usuários.")
          }
        },
        {
          text: 'Entrar',
          handler: (data) => {
            console.log("Bem vindo!!", data)
          }

        }
      ]
    });
    await alert.present();
  }

  async abrirRadio() {
    let alert = await this.alertCtlr.create({
      header: 'radio',
      inputs: [
        {
          name: 'radio1',
          type: 'radio',
          label: 'Radiolue 1',
          value: 'radio1',
          checked: true
        },
        {
          name: 'radio2',
          type: 'radio',
          label: 'Radio 2',
          value: 'radio2'
        },
        {
          name: 'radio3',
          type: 'radio',
          label: 'Radio 3',
          value: 'radio3'
        },
        {
          name: 'radio4',
          type: 'radio',
          label: 'Radio 4',
          value: 'radio4'
        },
        {
          name: 'radio5',
          type: 'radio',
          label: 'Radio 5',
          value: 'radio5'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },
        {
          text: 'Ok',
          handler: (data) => {
            console.log('confirm OK', data);
          }
        }
      ]
    })
    await alert.present();
  }

  async abrirCheckbox() {
    let alert = await this.alertCtlr.create({
      header: 'Checkbox',
      inputs: [
        {
          name: 'checkbox1',
          type: 'checkbox',
          label: 'Checkbox 1',
          value: 'checkbox1',
          checked: true
        },
        {
          name: 'checkbox2',
          type: 'checkbox',
          label: 'Checkbox 2',
          value: 'checkbox2'
        },
        {
          name: 'checkbox3',
          type: 'checkbox',
          label: 'Checkbox 3',
          value: 'checkbox3'
        },
        {
          name: 'checkbox4',
          type: 'checkbox',
          label: 'Checkbox 4',
          value: 'checkbox4'
        },
        {
          name: 'checkbox5',
          type: 'checkbox',
          label: 'Checkbox 5',
          value: 'checkbox5'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },
        {
          text: 'Ok',
          handler: (data) => {
            console.log('confirm OK', data);
          }
        }
      ]
    })
    await alert.present();
  }
}
