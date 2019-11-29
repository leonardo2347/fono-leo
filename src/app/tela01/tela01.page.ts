import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tela01',
  templateUrl: './tela01.page.html',
  styleUrls: ['./tela01.page.scss'],
})
export class Tela01Page implements OnInit {

  atividades: { img: string, opcoes: { texto: string, certo: boolean }[] }[];
  atividade: { img: string, opcoes: { texto: string, certo: boolean }[] };
  posicao: number;
  ultima: boolean = false;
  pontos:number;

  constructor(public alertController: AlertController) {
    this.posicao = 0;
    this.pontos = 0;
    this.atividades = [
      {
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
    ];
    this.atividade = this.atividades[this.posicao];
   
  }

  async avaliar(opcao) {
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

  ngOnInit() {
  }

}
