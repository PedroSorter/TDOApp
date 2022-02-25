import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/core/models/image';
import { ImageService } from 'src/app/core/services/image/image.service';
import { DataService }  from 'src/app/core/services/web-service/data.service';

@Component({
  selector: 'app-images-list',
  templateUrl: './images-list.component.html',
  styleUrls: ['./images-list.component.scss']
})
export class ImagesListComponent implements OnInit {

  constructor(private imageService : ImageService, private dataService : DataService) { }

  images = new Array<Image>();

  ngOnInit(): void {
    this.imageService.getImages().subscribe({
      next: (imageList: Image[]) =>  {
        this.images = imageList;
      },
      complete: () => {},
      error: () => {}
    })
  }

  showPicture(image: string) {
    this.dataService.SendImage(image);
  }
}
