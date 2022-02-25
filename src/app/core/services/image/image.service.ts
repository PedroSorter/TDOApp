import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  url = 'image/';
  constructor(private api: ApiService) { }

  getImages() {
      const finalUrl = this.url;
      var images = this.api.get(finalUrl);
      console.log(images);
      return images;   
  }
}
