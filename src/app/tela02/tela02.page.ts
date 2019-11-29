import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tela02',
  templateUrl: './tela02.page.html',
  styleUrls: ['./tela02.page.scss'],
})
export class Tela02Page implements OnInit {
  atividades: { img: string, resposta: string }[];
  resposta: string;
  atividade: { img: string, resposta: string };
  posicao: number;
  ultima: boolean = false;
  pontos:number;



  constructor(public alertController: AlertController) {
    this.posicao = 0;
    this.pontos = 0;
    this.atividades = [
      {
        img: "https://www.oamigopet.com/wp-content/uploads/2018/04/dog-1210559_640.jpg",
        resposta: "Cachorro"
      },
      {
        img: "https://image.dhgate.com/0x0s/f2-albu-g7-M00-04-73-rBVaSlqU_SyAMezjAAD9j27aFZQ730.jpg/moda-pequenos-c-es-de-estima-o-gato-culos.jpg",
        resposta: "Gato"
      },
      {
        img: "https://cdn.pixabay.com/photo/2018/05/03/22/45/lion-3372731_960_720.jpg",
        resposta: "Leão"
      },
    ];
    this.atividade = this.atividades[this.posicao];
  }

  async avaliar(atividade) {
    let resultado;
    if (this.resposta && atividade.resposta === this.resposta) {
      resultado = "Parabéns, voce acertou!";
      this.posicao = this.posicao + 1;
      this.atividade = this.atividades[this.posicao];
      this.resposta = "";
      this.pontos = this.pontos + 5;
     

      if (this.posicao == this.atividades.length){
      this.ultima = true;
      }

    } else {
      resultado = "Que pena, voce errou!";
    }

    const alert = await this.alertController.create({
      subHeader: 'Resposta',
      message: resultado
    });

    await alert.present();
  }

  ngOnInit() {
  }

}
