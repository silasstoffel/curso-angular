import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "#Alura Pic";

  photos = [
    {
      description: "Aston Martin Vulcan",
      url:
        "https://fotos.jornaldocarro.estadao.com.br/jornal-do-carro/imagens/noticia/aston-martin-vulcan-sale-1.jpg",
    },
    {
      description: "Mercedes - AMG GT R Pro",
      url:
        "https://www.hojeemdia.com.br/polopoly_fs/1.707326!/image/image.jpg_gen/derivatives/landscape_653/image.jpg",
    },
    {
      description: "Mercedes-AMG A 45 S",
      url:
        "https://s2.glbimg.com/ruCrpr2JVBXsJDqIOvyTzv5M1Yk=/0x0:620x413/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/d/B/woBdoORdqMV0XpRLyU0A/2020-08-06-mercedes-amg-a-45-s-4matic-29.jpeg",
    },
  ];
}
