import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela03',
  templateUrl: './tela03.page.html',
  styleUrls: ['./tela03.page.scss'],
})
export class Tela03Page implements OnInit {
  telas;
  constructor() {
    this.telas= [
      {
        img: "https://kortesia24hs.com.br/wp-content/uploads/2019/04/Ratos-comem-ra%C3%A7%C3%A3o-de-cachorro.jpg",
      },
    ];
   }

  ngOnInit() {
  }

}
