import { Component, OnInit } from "@angular/core";
import { Photo } from "./components/photos/photo/photo";
import { PhotoService } from "./components/photos/photo/photo.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "#Alura Pic";
  photos: Photo[] = [];

  constructor(private photoService: PhotoService) {}

  ngOnInit() {
    this.loadPhotos();
  }

  private loadPhotos() {
    this.photoService.listFromUser("flavio").subscribe(
      (res) => (this.photos = res),
      (err) => console.error(err.message)
    );
  }
}
