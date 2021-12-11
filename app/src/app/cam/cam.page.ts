import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-cam',
  templateUrl: './cam.page.html',
  styleUrls: ['./cam.page.scss'],
})
export class CamPage implements OnInit {


  constructor(public photoService: PhotoService) { }
  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
  async ngOnInit() {
    await this.photoService.loadSaved();
  }

}
