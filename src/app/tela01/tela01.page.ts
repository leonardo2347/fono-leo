import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tela01',
  templateUrl: './tela01.page.html',
  styleUrls: ['./tela01.page.scss'],
})
export class Tela01Page implements OnInit {

  atividades: any[];
  atividade: any;
  posicao: number;
  ultima: boolean = false;
  pontos:number;
  resposta:string;

  constructor(public alertController: AlertController) {
    this.posicao = 0;
    this.pontos = 0;
    this.atividades = [
      {
        nivel: 1,
        img: "https://image.dhgate.com/0x0s/f2-albu-g7-M00-04-73-rBVaSlqU_SyAMezjAAD9j27aFZQ730.jpg/moda-pequenos-c-es-de-estima-o-gato-culos.jpg",
        opcoes: [
          {
            texto: "Gato",
            certo: true
          },
          {
            texto: "Cachorro",
            certo: false
          },
          {
            texto: "Leão",
            certo: false
          }
        ]
      },
      {
        nivel: 2,
        img: "https://www.oamigopet.com/wp-content/uploads/2018/04/dog-1210559_640.jpg",
        resposta: "Cachorro"
      },
      {
        nivel: 1,
        img: "https://kortesia24hs.com.br/wp-content/uploads/2019/04/Ratos-comem-ra%C3%A7%C3%A3o-de-cachorro.jpg",
        opcoes: [
          {
            texto: "Gato",
            certo: false
          },
          {
            texto: "Cachorro",
            certo: true
          },
          {
            texto: "Leão",
            certo: false
          }
        ]
      },
      {
        nivel: 1,
        img: "https://cdn.pixabay.com/photo/2018/05/03/22/45/lion-3372731_960_720.jpg",
        opcoes: [
          {
            texto: "Gato",
            certo: false
          },
          {
            texto: "Cachorro",
            certo: false
          },
          {
            texto: "Leão",
            certo: true
          }
        ]
      },
      {
        nivel: 2,
        img: "https://image.dhgate.com/0x0s/f2-albu-g7-M00-04-73-rBVaSlqU_SyAMezjAAD9j27aFZQ730.jpg/moda-pequenos-c-es-de-estima-o-gato-culos.jpg",
        resposta: "Gato"
      },
      {
        nivel: 2,
        img: "https://cdn.pixabay.com/photo/2018/05/03/22/45/lion-3372731_960_720.jpg",
        resposta: "Leão"
      }
    ];
    this.atividade = this.atividades[this.posicao];
  }

  async avaliar1(opcao) {
    let resultado;
    if (opcao.certo) {
      resultado = "Parabéns, você acertou!";
      this.posicao = this.posicao + 1;
      this.atividade = this.atividades[this.posicao];
      this.pontos = this.pontos +5;
     

      if (this.posicao == this.atividades.length) {
        this.ultima = true;
      }
    } else {
      resultado = "Que pena, você errou!";
    }

    const alert = await this.alertController.create({
      subHeader: 'Resposta',
      message: resultado
    });

    alert.present();
  }

  async avaliar2(atividade) {
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
